import { createContext, ReactNode, useState } from 'react'

import { useAuth } from 'src/hooks/useAuth'
import { getRewardsRequest, setRewardsRequest } from 'src/services/rewardsService'

type RewardsContextType = {
  rewards: RewardsProps | undefined
  getRewards: () => void
  isLoading: boolean
}

type RewardsContextProviderProps = {
  children: ReactNode
}

export const RewardsContext = createContext({} as RewardsContextType)

export function RewardsContextProvider(props: RewardsContextProviderProps) {
  const { user } = useAuth()
  const [rewards, setRewards] = useState<RewardsProps>()
  const [isLoading, setIsLoading] = useState(false)

  async function getRewards() {
    if (!user) return

    const auxRewards = await getRewardsRequest(user.id)

    if (auxRewards) {
      setRewards(auxRewards)
      return
    }

    const newRewards: RewardsProps = {
      coins: 0,
      trophy: 0,
      currentLevel: 1,
      round: 0
    }

    await setRewardsRequest(user.id, newRewards)
    setRewards(newRewards)
  }

  return (
    <RewardsContext.Provider value={{ rewards, getRewards, isLoading }}>
      {props.children}
    </RewardsContext.Provider>
  )
}
