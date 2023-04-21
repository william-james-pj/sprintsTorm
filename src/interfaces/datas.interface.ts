/* eslint-disable @typescript-eslint/no-unused-vars */
type LastTrainingProps = {
  id: string
}

type EnemiesProps = {
  id: string
  life: number
  level: number
  name: string
  resistance: ResistanceTypeProps
  weakness: WeaknessTypeProps
}

type ResistanceTypeProps = 'all' | 'warrior' | 'mage' | 'archer'

type WeaknessTypeProps = 'all' | 'warrior' | 'mage' | 'archer'

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
