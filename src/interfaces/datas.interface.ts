/* eslint-disable @typescript-eslint/no-unused-vars */
type TrainingProps = {
  distance: number
  coins: number
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

type InternalTaskProps = {
  task: string
  value: number
  reward: number
}

type DailyTaskProps = {
  id: string
  userId: string
  day: number
  reward: number
  task: string
  value: number
  isCompleted: boolean
}

type WeeklyTaskProps = {
  id: string
  userId: string
  day: number
  month: number
  reward: number
  task: string
  value: number
  currentValue: number
  isCompleted: boolean
}

type MonthlyTaskProps = {
  id: string
  userId: string
  month: number
  reward: number
  task: string
  value: number
  currentValue: number
  isCompleted: boolean
}
