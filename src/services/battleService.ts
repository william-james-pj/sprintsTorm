import { doc, getDoc, setDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export const getBattleLevelRequest = async (
  userId: string
): Promise<BattleLevelProps | undefined> => {
  const docRef = doc(firestore, 'battleLevel', userId)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return undefined

  const data = docSnap.data()

  return {
    level: data.level,
    currentLife: data.currentLife
  }
}

export const setBattleLevelRequest = async (
  userId: string,
  mapLevel: BattleLevelProps
): Promise<void> => {
  await setDoc(doc(firestore, 'battleLevel', userId), mapLevel)
}
