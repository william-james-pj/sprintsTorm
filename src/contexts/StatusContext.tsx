import { createContext, ReactNode, useState } from 'react'

import { getStatusRequest, setStatusRequest } from 'src/services/statusService'

type StatusContextType = {
  status: StatusProps | undefined
  getStatus: (userId: string) => void
  updateCoins: (value: number) => void
  updateStatus: (userId: string) => Promise<void>
  finishBattle: (coinsEarned: number, userId: string) => Promise<void>
  isLoading: boolean
}

type StatusContextProviderProps = {
  children: ReactNode
}

export const StatusContext = createContext({} as StatusContextType)

export function StatusContextProvider(props: StatusContextProviderProps) {
  const [status, setStatus] = useState<StatusProps>()
  const [isLoading, setIsLoading] = useState(false)

  async function getStatus(userId: string) {
    const auxStatus = await getStatusRequest(userId)

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

    await setStatusRequest(userId, newStatus)
    setStatus(newStatus)
  }

  function updateCoins(value: number) {
    if (!status) return
    const auxStatus = { ...status }
    auxStatus.coins = value
    setStatus(auxStatus)
  }

  async function updateStatus(userId: string) {
    if (!status) return
    await setStatusRequest(userId, status)
  }

  async function finishBattle(coinsEarned: number, userId: string) {
    if (!status) return
    setIsLoading(true)

    const auxStatus = { ...status }
    auxStatus.trophy += 1
    auxStatus.coins += coinsEarned

    const currentLevel = auxStatus.currentLevel + 1
    if (currentLevel === 11) {
      auxStatus.currentLevel = 1
      auxStatus.round += 1
    } else auxStatus.currentLevel = currentLevel

    setStatus(auxStatus)
    await setStatusRequest(userId, auxStatus)
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
