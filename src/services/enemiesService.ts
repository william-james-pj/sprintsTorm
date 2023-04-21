import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import { firestore } from './firebase'

export const getEnemiesRequest = async (): Promise<EnemiesProps[]> => {
  const q = query(collection(firestore, 'enemies'), orderBy('level'))
  const enemies: EnemiesProps[] = []

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    const data = doc.data()

    enemies.push({
      id: doc.id,
      life: data.life,
      level: data.level,
      name: data.name,
      resistance: data.resistance,
      weakness: data.weakness
    })
  })

  return enemies
}
