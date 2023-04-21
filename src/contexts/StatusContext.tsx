import { createContext, ReactNode, useState } from 'react'

import { useAuth } from 'src/hooks/useAuth'
import { getStatusRequest, setStatusRequest } from 'src/services/statusService'

type StatusContextType = {
  status: StatusProps | undefined
  getStatus: () => void
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

  return (
    <StatusContext.Provider value={{ status, getStatus, isLoading }}>
      {props.children}
    </StatusContext.Provider>
  )
}
