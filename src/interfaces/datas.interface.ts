/* eslint-disable @typescript-eslint/no-unused-vars */
type LastTrainingProps = {
  id: string
}

type UserArmyProps = {
  warrior: number
  mage: number
  archer: number
}

type WarriorAbilityTypeProps = 'warrior' | 'mage' | 'archer'
type EnemyAbilityTypeProps = 'all' | 'warrior' | 'mage' | 'archer'

type WarriorsProps = {
  id: string
  name: string
  ability: WarriorAbilityTypeProps
}

type EnemiesProps = {
  id: string
  life: number
  level: number
  name: string
  ability: EnemyAbilityTypeProps
}

type UserProps = {
  id: string
  name: string
  email: string
  picture: string
}

type StatusProps = {
  coins: number
  trophy: number
  currentLevel: number
  round: number
}

type BattleLevelProps = {
  level: number
  currentLife: number
}
