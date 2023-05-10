import { createContext, ReactNode, useState } from 'react'

import { getTrackingRequest, setTrackingRequest } from 'src/services/trackingService'

type TrackingContextType = {
  coinsEarned: number
  tracking: TrainingProps | undefined
  isTrackingLoading: boolean
  calculateEarnedCoins: (distance: number) => void
  saveTracking: (userId: string, distance: number) => Promise<void>
  getTracking: (userId: string) => Promise<void>
}

type TrackingContextProviderProps = {
  children: ReactNode
}

export const TrackingContext = createContext({} as TrackingContextType)

export function TrackingContextProvider(props: TrackingContextProviderProps) {
  const [coinsEarned, setCoinsEarned] = useState(0)
  const [tracking, setTracking] = useState<TrainingProps>()
  const [isTrackingLoading, setIsTrackingLoading] = useState(false)

  function calculateEarnedCoins(distance: number) {
    const coins = Math.round((distance / 2) * 50)
    setCoinsEarned(coins)
  }

  async function saveTracking(userId: string, distance: number) {
    setIsTrackingLoading(true)

    const training: TrainingProps = {
      distance,
      coins: coinsEarned
    }

    await setTrackingRequest(userId, training)
    setIsTrackingLoading(false)
    setCoinsEarned(0)
    setTracking(training)
  }

  async function getTracking(userId: string) {
    const auxTracking = await getTrackingRequest(userId)

    if (auxTracking) {
      setTracking(auxTracking)
    }
  }

  return (
    <TrackingContext.Provider
      value={{
        coinsEarned,
        tracking,
        isTrackingLoading,
        calculateEarnedCoins,
        saveTracking,
        getTracking
      }}
    >
      {props.children}
    </TrackingContext.Provider>
  )
}
