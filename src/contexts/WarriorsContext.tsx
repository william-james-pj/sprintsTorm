import { createContext, ReactNode, useState } from 'react'

import { coinBaseValue } from 'src/constants/coinBaseValue'
import { useAuth } from 'src/hooks/useAuth'
import { useStatus } from 'src/hooks/useStatus'
import {
  getUserArmyRequest,
  getWarriorsRequest,
  setUserArmyRequest
} from 'src/services/warriorsService'

type WarriorsContextType = {
  warriors: WarriorsProps[]
  userArmy: UserArmyProps | undefined
  getWarriors: () => Promise<void>
  getUserWarriors: () => Promise<void>
  updateUserArmy: () => Promise<void>
  buyWarrior: (type: WarriorsTypeProps) => void
}

type WarriorsContextProviderProps = {
  children: ReactNode
}

export const WarriorsContext = createContext({} as WarriorsContextType)

export function WarriorsContextProvider(props: WarriorsContextProviderProps) {
  const { user } = useAuth()
  const { status, updateCoins } = useStatus()
  const [warriors, setWarriors] = useState<WarriorsProps[]>([])
  const [userArmy, setUserArmy] = useState<UserArmyProps>()

  async function getWarriors() {
    const auxWarriors = await getWarriorsRequest()
    setWarriors(auxWarriors)
  }

  async function getUserWarriors() {
    if (!user) return

    const auxUserArmy = await getUserArmyRequest(user.id)

    if (auxUserArmy) {
      setUserArmy(auxUserArmy)
      return
    }

    const newUserArmy: UserArmyProps = {
      warrior: 0,
      mage: 0,
      archer: 0
    }

    await setUserArmyRequest(user.id, newUserArmy)
    setUserArmy(newUserArmy)
  }

  function buyWarrior(type: WarriorsTypeProps) {
    if (!status || !userArmy) return
    if (status.coins - coinBaseValue < 0) return

    const newCoinsValue = status.coins - 50
    updateCoins(newCoinsValue)

    const auxUserArmy = { ...userArmy }
    auxUserArmy[type] += 1
    setUserArmy(auxUserArmy)
  }

  async function updateUserArmy() {
    if (!user || !userArmy) return
    await setUserArmyRequest(user.id, userArmy)
  }

  return (
    <WarriorsContext.Provider
      value={{ warriors, userArmy, getWarriors, getUserWarriors, updateUserArmy, buyWarrior }}
    >
      {props.children}
    </WarriorsContext.Provider>
  )
}
