import { collection, doc, getDocs, query, where, writeBatch } from 'firebase/firestore'

import { firestore } from './firebase'

export const getDailyTaskRequest = async (
  userId: string
): Promise<DailyTaskProps[] | undefined> => {
  const q = query(collection(firestore, 'dailyTask'), where('userId', '==', userId))
  const dailyTask: DailyTaskProps[] = []

  const querySnapshot = await getDocs(q)

  if (querySnapshot.empty) return

  querySnapshot.forEach((doc) => {
    const data = doc.data()

    dailyTask.push({
      id: data.id,
      task: data.task,
      reward: data.reward,
      value: data.value,
      userId: data.userId,
      day: data.day
    })
  })

  return dailyTask
}

export const setDailyTaskRequest = async (dailyTasks: DailyTaskProps[]): Promise<void> => {
  const batch = writeBatch(firestore)

  dailyTasks.forEach((dailyTask) => {
    const dTaskRef = doc(firestore, 'dailyTask', dailyTask.id)
    batch.set(dTaskRef, dailyTask)
  })

  await batch.commit()
}

export const getMonthlyTaskRequest = async (
  userId: string
): Promise<MonthlyTaskProps[] | undefined> => {
  const q = query(collection(firestore, 'monthlyTask'), where('userId', '==', userId))
  const monthlyTask: MonthlyTaskProps[] = []

  const querySnapshot = await getDocs(q)

  if (querySnapshot.empty) return

  querySnapshot.forEach((doc) => {
    const data = doc.data()

    monthlyTask.push({
      id: data.id,
      task: data.task,
      reward: data.reward,
      value: data.value,
      userId: data.userId,
      month: data.month
    })
  })

  return monthlyTask
}

export const setMonthlyTaskRequest = async (monthlyTasks: MonthlyTaskProps[]): Promise<void> => {
  const batch = writeBatch(firestore)

  monthlyTasks.forEach((monthlyTask) => {
    const dTaskRef = doc(firestore, 'monthlyTask', monthlyTask.id)
    batch.set(dTaskRef, monthlyTask)
  })

  await batch.commit()
}
