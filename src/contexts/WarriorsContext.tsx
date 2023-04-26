import { createContext, ReactNode, useState } from 'react'

import { coinBaseValue } from 'src/constants/coinBaseValue'
import {
  getUserArmyRequest,
  getWarriorsRequest,
  setUserArmyRequest
} from 'src/services/warriorsService'

type WarriorsContextType = {
  warriors: WarriorsProps[]
  userArmy: UserArmyProps | undefined
  getWarriors: () => Promise<void>
  getUserWarriors: (userId: string) => Promise<void>
  updateUserArmy: (userId: string) => Promise<void>
  buyWarrior: (
    type: WarriorAbilityTypeProps,
    userCoins: number,
    updateCoins: (value: number) => void
  ) => void
  lostWarrior: (type: WarriorAbilityTypeProps) => void
}

type WarriorsContextProviderProps = {
  children: ReactNode
}

export const WarriorsContext = createContext({} as WarriorsContextType)

export function WarriorsContextProvider(props: WarriorsContextProviderProps) {
  const [warriors, setWarriors] = useState<WarriorsProps[]>([])
  const [userArmy, setUserArmy] = useState<UserArmyProps>()

  async function getWarriors() {
    const auxWarriors = await getWarriorsRequest()
    setWarriors(auxWarriors)
  }

  async function getUserWarriors(userId: string) {
    const auxUserArmy = await getUserArmyRequest(userId)

    if (auxUserArmy) {
      setUserArmy(auxUserArmy)
      return
    }

    const newUserArmy: UserArmyProps = {
      warrior: 0,
      mage: 0,
      archer: 0
    }

    await setUserArmyRequest(userId, newUserArmy)
    setUserArmy(newUserArmy)
  }

  function buyWarrior(
    type: WarriorAbilityTypeProps,
    userCoins: number,
    updateCoins: (value: number) => void
  ) {
    if (!userArmy) return
    if (userCoins - coinBaseValue < 0) return

    const newCoinsValue = userCoins - 50
    updateCoins(newCoinsValue)

    const auxUserArmy = { ...userArmy }
    auxUserArmy[type] += 1
    setUserArmy(auxUserArmy)
  }

  function lostWarrior(type: WarriorAbilityTypeProps) {
    if (!userArmy) return
    const auxUserArmy = { ...userArmy }
    auxUserArmy[type] -= 1
    setUserArmy(auxUserArmy)
  }

  async function updateUserArmy(userId: string) {
    if (!userArmy) return
    await setUserArmyRequest(userId, userArmy)
  }

  return (
    <WarriorsContext.Provider
      value={{
        warriors,
        userArmy,
        getWarriors,
        getUserWarriors,
        updateUserArmy,
        buyWarrior,
        lostWarrior
      }}
    >
      {props.children}
    </WarriorsContext.Provider>
  )
}
