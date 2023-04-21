import { doc, getDoc, setDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export const getRewardsRequest = async (userId: string): Promise<RewardsProps | undefined> => {
  const docRef = doc(firestore, 'rewards', userId)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return undefined

  const data = docSnap.data()

  return {
    coins: data.coins,
    trophy: data.trophy,
    currentLevel: data.currentLevel,
    round: data.round
  }
}

export const setRewardsRequest = async (userId: string, rewards: RewardsProps): Promise<void> => {
  await setDoc(doc(firestore, 'rewards', userId), rewards)
}
