import { addDoc, collection, getDocs, orderBy, query, Timestamp, where } from 'firebase/firestore'

import { firestore } from './firebase'

export const getTrackingRequest = async (userId: string): Promise<TrainingProps[]> => {
  const trackingRef = collection(firestore, 'tracking')
  const q = query(trackingRef, where('userId', '==', userId), orderBy('date', 'desc'))
  const querySnapshot = await getDocs(q)

  const trainings: TrainingProps[] = []

  if (querySnapshot.empty) return []

  querySnapshot.forEach((doc) => {
    const data = doc.data()

    trainings.push({
      userId: data.userId,
      distance: data.distance,
      date: data.date.toDate()
    })
  })

  return trainings
}

export const setTrackingRequest = async (training: TrainingProps): Promise<void> => {
  await addDoc(collection(firestore, 'tracking'), {
    ...training,
    date: Timestamp.fromDate(training.date)
  })
}
