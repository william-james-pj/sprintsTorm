import { createContext, ReactNode, useState } from 'react'

import { baseDamageValue } from 'src/constants/baseDamageValue'
import { getBattleLevelRequest, setBattleLevelRequest } from 'src/services/battleService'
import { checkEnemyWeakness } from 'src/utils/checkEnemyWeakness'

type BattleContextType = {
  enemy: EnemiesProps | undefined
  totalLife: number
  currentLife: number
  lastDamage: number | undefined
  isLoadingBattle: boolean
  selectEnemy: (enemy: EnemiesProps, userId: string, round: number) => Promise<void>
  handleBattle: (
    warrior: WarriorsProps,
    onBossDefeated: () => void,
    onLostWarrior: (type: WarriorAbilityTypeProps) => void
  ) => void
  saveBattleLevel: (userId: string) => Promise<void>
}

type BattleContextProviderProps = {
  children: ReactNode
}

export const BattleContext = createContext({} as BattleContextType)

export function BattleContextProvider(props: BattleContextProviderProps) {
  const [enemy, setEnemy] = useState<EnemiesProps>()
  const [totalLife, setTotalLife] = useState(0)
  const [currentLife, setCurrentLife] = useState(0)
  const [lastDamage, setLastDamage] = useState<number>()
  const [isLoadingBattle, setIsLoadingBattle] = useState(false)

  async function selectEnemy(enemy: EnemiesProps, userId: string, round: number) {
    setIsLoadingBattle(true)
    setLastDamage(undefined)

    const lastBattleLevel = await getBattleLevelRequest(userId)
    const life = calculateTotalLife(enemy.life, round)

    setEnemy(enemy)
    setTotalLife(life)

    if (lastBattleLevel?.level === enemy.level) {
      setCurrentLife(lastBattleLevel.currentLife)
    } else setCurrentLife(life)
    setIsLoadingBattle(false)
  }

  function handleBattle(
    warrior: WarriorsProps,
    onBossDefeated: () => void,
    onLostWarrior: (type: WarriorAbilityTypeProps) => void
  ) {
    if (!enemy) return

    onLostWarrior(warrior.ability)

    const damage = calculateDamage(checkEnemyWeakness(warrior, enemy))
    const remainingLife = currentLife - damage
    setLastDamage(damage)

    if (remainingLife <= 0) {
      setCurrentLife(0)
      onBossDefeated()
    } else setCurrentLife(remainingLife)
  }

  async function saveBattleLevel(userId: string) {
    if (!enemy) return

    const mapLevel: BattleLevelProps = { level: enemy?.level, currentLife }
    await setBattleLevelRequest(userId, mapLevel)
  }

  // private functions
  function calculateTotalLife(life: number, round: number): number {
    if (round === 1) return life
    return life * (1 + 0.5 ** (round - 1))
  }

  function calculateDamage(hasWeakness: boolean): number {
    let damage = baseDamageValue
    const variation = damage * 0.6
    damage += Math.floor(Math.random() * (2 * variation + 1)) - variation
    if (hasWeakness) return damage * 2
    return damage
  }

  return (
    <BattleContext.Provider
      value={{
        enemy,
        totalLife,
        currentLife,
        lastDamage,
        isLoadingBattle,
        selectEnemy,
        handleBattle,
        saveBattleLevel
      }}
    >
      {props.children}
    </BattleContext.Provider>
  )
}
