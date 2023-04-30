import { doc, getDoc, setDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export const getTrackingRequest = async (userId: string): Promise<TrainingProps | undefined> => {
  const docRef = doc(firestore, 'tracking', userId)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return undefined

  const data = docSnap.data()

  return {
    coins: data.coins,
    distance: data.distance
  }
}

export const setTrackingRequest = async (
  userId: string,
  training: TrainingProps
): Promise<void> => {
  await setDoc(doc(firestore, 'tracking', userId), training)
}
