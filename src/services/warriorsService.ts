import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from 'firebase/firestore'

import { firestore } from './firebase'

export const getWarriorsRequest = async (): Promise<WarriorsProps[]> => {
  const q = query(collection(firestore, 'warriors'), orderBy('ability'))
  const warriors: WarriorsProps[] = []

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const data = doc.data()

    warriors.push({
      id: doc.id,
      name: data.name,
      ability: data.ability
    })
  })

  return warriors
}

export const getUserArmyRequest = async (userId: string): Promise<UserArmyProps | undefined> => {
  const docRef = doc(firestore, 'userArmy', userId)
  const docSnap = await getDoc(docRef)

  if (!docSnap.exists()) return undefined

  const data = docSnap.data()

  return {
    warrior: data.warrior,
    mage: data.mage,
    archer: data.archer
  }
}

export const setUserArmyRequest = async (
  userId: string,
  userArmy: UserArmyProps
): Promise<void> => {
  await setDoc(doc(firestore, 'userArmy', userId), userArmy)
}
