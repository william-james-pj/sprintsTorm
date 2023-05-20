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
      day: data.day,
      isCompleted: data.isCompleted
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

export const getWeeklyTaskRequest = async (
  userId: string
): Promise<WeeklyTaskProps[] | undefined> => {
  const q = query(collection(firestore, 'weeklyTask'), where('userId', '==', userId))
  const weeklyTask: WeeklyTaskProps[] = []

  const querySnapshot = await getDocs(q)

  if (querySnapshot.empty) return

  querySnapshot.forEach((doc) => {
    const data = doc.data()

    weeklyTask.push({
      id: data.id,
      task: data.task,
      reward: data.reward,
      value: data.value,
      userId: data.userId,
      day: data.day,
      month: data.month,
      currentValue: data.currentValue,
      isCompleted: data.isCompleted
    })
  })

  return weeklyTask
}

export const setWeeklyTaskRequest = async (weeklyTasks: WeeklyTaskProps[]): Promise<void> => {
  const batch = writeBatch(firestore)

  weeklyTasks.forEach((weeklyTask) => {
    const dTaskRef = doc(firestore, 'weeklyTask', weeklyTask.id)
    batch.set(dTaskRef, weeklyTask)
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
      month: data.month,
      currentValue: data.currentValue,
      isCompleted: data.isCompleted
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
