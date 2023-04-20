import { createContext, ReactNode, useState } from 'react'

import { useAuth } from 'src/hooks/useAuth'

type RewardsContextType = {
  rewards: RewardsProps | undefined
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

  return (
    <RewardsContext.Provider value={{ rewards, isLoading }}>
      {props.children}
    </RewardsContext.Provider>
  )
}
