import { useContext } from 'react'

import { WarriorsContext } from 'src/contexts/WarriorsContext'

export function useWarriors() {
  const value = useContext(WarriorsContext)

  return value
}
