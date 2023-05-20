import { createContext, ReactNode, useState } from 'react'

import { getTrackingRequest, setTrackingRequest } from 'src/services/trackingService'
import { randomWarriorCount } from 'src/utils/randomWarriorCount'

type TrackingContextType = {
  alliesEarned: UserArmyProps | undefined
  trackings: TrainingProps[]
  isTrackingLoading: boolean
  calculateEarnedWarriors: (distance: number) => void
  saveTracking: (userId: string, distance: number) => Promise<void>
  getTracking: (userId: string) => Promise<void>
}

type TrackingContextProviderProps = {
  children: ReactNode
}

export const TrackingContext = createContext({} as TrackingContextType)

export function TrackingContextProvider(props: TrackingContextProviderProps) {
  const [alliesEarned, setAlliesEarned] = useState<UserArmyProps>()
  const [trackings, setTrackings] = useState<TrainingProps[]>([])
  const [isTrackingLoading, setIsTrackingLoading] = useState(false)

  function calculateEarnedWarriors(distance: number) {
    let earnedWarriors = Math.floor(distance / 2)
    const remainingDistance = distance % 2
    const possibility = (remainingDistance / 2) * 100

    if (Math.random() < possibility / 100) {
      earnedWarriors += 1
    }

    const allies = randomWarriorCount(earnedWarriors)
    setAlliesEarned(allies)
  }

  async function saveTracking(userId: string, distance: number) {
    setIsTrackingLoading(true)

    const training: TrainingProps = {
      userId,
      distance,
      date: new Date()
    }

    await setTrackingRequest(training)
    const aux = [training, ...trackings]
    setTrackings(aux)

    setAlliesEarned(undefined)
    setIsTrackingLoading(false)
  }

  async function getTracking(userId: string) {
    const auxTracking = await getTrackingRequest(userId)

    if (auxTracking) {
      setTrackings(auxTracking)
    }
  }

  return (
    <TrackingContext.Provider
      value={{
        alliesEarned,
        trackings,
        isTrackingLoading,
        calculateEarnedWarriors,
        saveTracking,
        getTracking
      }}
    >
      {props.children}
    </TrackingContext.Provider>
  )
}
