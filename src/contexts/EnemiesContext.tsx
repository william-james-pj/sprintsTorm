import { createContext, ReactNode, useState } from 'react'

import { getEnemiesRequest } from 'src/services/enemiesService'

type EnemiesContextType = {
  enemies: EnemiesProps[]
  getEnemies: () => Promise<void>
}

type EnemiesContextProviderProps = {
  children: ReactNode
}

export const EnemiesContext = createContext({} as EnemiesContextType)

export function EnemiesContextProvider(props: EnemiesContextProviderProps) {
  const [enemies, setEnemies] = useState<EnemiesProps[]>([])

  async function getEnemies() {
    const auxEnemies = await getEnemiesRequest()

    setEnemies(auxEnemies)
  }

  return (
    <EnemiesContext.Provider value={{ enemies, getEnemies }}>
      {props.children}
    </EnemiesContext.Provider>
  )
}
