import { useContext } from 'react'

import { RewardsContext } from '../contexts/RewardsContext'

export function useRewards() {
  const value = useContext(RewardsContext)

  return value
}
