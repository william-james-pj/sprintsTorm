import { createContext, ReactNode, useState } from 'react'

import { useAuth } from 'src/hooks/useAuth'
import { getStatusRequest, setStatusRequest } from 'src/services/statusService'

type StatusContextType = {
  status: StatusProps | undefined
  getStatus: () => void
  updateCoins: (value: number) => void
  updateStatus: () => Promise<void>
  finishBattle: (coinsEarned: number) => Promise<void>
  isLoading: boolean
}

type StatusContextProviderProps = {
  children: ReactNode
}

export const StatusContext = createContext({} as StatusContextType)

export function StatusContextProvider(props: StatusContextProviderProps) {
  const { user } = useAuth()
  const [status, setStatus] = useState<StatusProps>()
  const [isLoading, setIsLoading] = useState(false)

  async function getStatus() {
    if (!user) return

    const auxStatus = await getStatusRequest(user.id)

    if (auxStatus) {
      setStatus(auxStatus)
      return
    }

    const newStatus: StatusProps = {
      coins: 0,
      trophy: 0,
      currentLevel: 1,
      round: 1
    }

    await setStatusRequest(user.id, newStatus)
    setStatus(newStatus)
  }

  function updateCoins(value: number) {
    if (!status) return
    const auxStatus = { ...status }
    auxStatus.coins = value
    setStatus(auxStatus)
  }

  async function updateStatus() {
    if (!user || !status) return
    await setStatusRequest(user.id, status)
  }

  async function finishBattle(coinsEarned: number) {
    if (!user || !status) return
    setIsLoading(true)

    const auxStatus = { ...status }
    auxStatus.trophy += 1
    auxStatus.coins += coinsEarned

    const currentLevel = auxStatus.currentLevel + 1
    if (currentLevel === 10) {
      auxStatus.currentLevel = 1
      auxStatus.round += 1
    } else auxStatus.currentLevel = currentLevel

    setStatus(auxStatus)
    await setStatusRequest(user.id, auxStatus)
    setIsLoading(false)
  }

  return (
    <StatusContext.Provider
      value={{ status, getStatus, updateCoins, updateStatus, finishBattle, isLoading }}
    >
      {props.children}
    </StatusContext.Provider>
  )
}
