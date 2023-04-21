import { useContext } from 'react'

import { EnemiesContext } from 'src/contexts/EnemiesContext'

export function useEnemies() {
  const value = useContext(EnemiesContext)

  return value
}
