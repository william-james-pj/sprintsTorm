import { useContext } from 'react'

import { BattleContext } from 'src/contexts/BattleContext'

export function useBattle() {
  const value = useContext(BattleContext)

  return value
}
