import { createContext, ReactNode, useState } from 'react'

import { useAuth } from 'src/hooks/useAuth'
import { getWarriorsRequest } from 'src/services/warriorsService'

type WarriorsContextType = {
  warriors: WarriorsProps[]
  getWarriors: () => void
}

type WarriorsContextProviderProps = {
  children: ReactNode
}

export const WarriorsContext = createContext({} as WarriorsContextType)

export function WarriorsContextProvider(props: WarriorsContextProviderProps) {
  const { user } = useAuth()
  const [warriors, setWarriors] = useState<WarriorsProps[]>([])

  async function getWarriors() {
    const auxWarriors = await getWarriorsRequest()
    console.log(auxWarriors)
    setWarriors(auxWarriors)
  }

  return (
    <WarriorsContext.Provider value={{ warriors, getWarriors }}>
      {props.children}
    </WarriorsContext.Provider>
  )
}
