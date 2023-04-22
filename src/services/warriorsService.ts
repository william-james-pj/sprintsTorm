import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import { firestore } from './firebase'

export const getWarriorsRequest = async (): Promise<WarriorsProps[]> => {
  const q = query(collection(firestore, 'warriors'), orderBy('name'))
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
