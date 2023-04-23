import { createContext, ReactNode, useState } from 'react'

import { baseDamageValue } from 'src/constants/baseDamageValue'
import { useAuth } from 'src/hooks/useAuth'
import { useStatus } from 'src/hooks/useStatus'
import { checkEnemyWeakness } from 'src/utils/checkEnemyWeakness'

type BattleContextType = {
  enemy: EnemiesProps | undefined
  totalLife: number
  currentLife: number
  selectEnemy: (enemy: EnemiesProps) => void
  handleBattle: (warrior: WarriorsProps) => void
}

type BattleContextProviderProps = {
  children: ReactNode
}

export const BattleContext = createContext({} as BattleContextType)

export function BattleContextProvider(props: BattleContextProviderProps) {
  const { user } = useAuth()
  const { status } = useStatus()
  const [enemy, setEnemy] = useState<EnemiesProps>()
  const [totalLife, setTotalLife] = useState(0)
  const [currentLife, setCurrentLife] = useState(0)

  function selectEnemy(enemy: EnemiesProps) {
    if (!status) return

    setEnemy(enemy)

    const life = calculateTotalLife(enemy.life, status.round)

    setTotalLife(life)
    setCurrentLife(life)
  }

  function handleBattle(warrior: WarriorsProps) {
    if (!enemy) return

    const has = checkEnemyWeakness(warrior, enemy)
    console.log(has)
    const damage = calculateDamage(has)

    const remainingLife = currentLife - damage

    if (remainingLife <= 0) setCurrentLife(0)
    else setCurrentLife(remainingLife)
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
    <BattleContext.Provider value={{ enemy, totalLife, currentLife, selectEnemy, handleBattle }}>
      {props.children}
    </BattleContext.Provider>
  )
}
