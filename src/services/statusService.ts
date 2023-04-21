import { doc, getDoc, setDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export const getStatusRequest = async (userId: string): Promise<StatusProps | undefined> => {
  const docRef = doc(firestore, 'status', userId)
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

export const setStatusRequest = async (userId: string, status: StatusProps): Promise<void> => {
  await setDoc(doc(firestore, 'status', userId), status)
}
