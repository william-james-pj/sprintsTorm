import { createContext, ReactNode, useState } from 'react'
import uuid from 'react-native-uuid'

import {
  getDailyTaskRequest,
  getMonthlyTaskRequest,
  setDailyTaskRequest,
  setMonthlyTaskRequest
} from 'src/services/taskService'
import { generateDailyTasks } from 'src/utils/generateDailyTask'
import { generateMonthlyTasks } from 'src/utils/generateMonthlyTasks'

type TaskContextType = {
  dailyTasks: DailyTaskProps[]
  monthlyTasks: MonthlyTaskProps[]
  getDailyTask: (userId: string) => Promise<void>
  getMonthlyTask: (userId: string) => Promise<void>
  completeDailyTask: (distance: number) => Promise<number>
  completeMonthlyTask: (distance: number) => Promise<number>
}

type TaskContextProviderProps = {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [dailyTasks, setDailyTasks] = useState<DailyTaskProps[]>([])
  const [monthlyTasks, setMonthlyTasks] = useState<MonthlyTaskProps[]>([])

  async function getDailyTask(userId: string) {
    const dailyTasksSaved = await getDailyTaskRequest(userId)

    if (!dailyTasksSaved) {
      await saveDailyTask(userId)
      return
    }

    const today = new Date().getDay()
    if (dailyTasksSaved[0].day === today) {
      setDailyTasks(dailyTasksSaved)
      return
    }

    const currentIds = dailyTasksSaved.map((dailyTask) => dailyTask.id)
    await saveDailyTask(userId, currentIds)
  }

  async function getMonthlyTask(userId: string) {
    const monthlyTasksSaved = await getMonthlyTaskRequest(userId)

    if (!monthlyTasksSaved) {
      await saveMonthlyTask(userId)
      return
    }

    const currentMonth = new Date().getMonth()
    if (monthlyTasksSaved[0].month === currentMonth) {
      setMonthlyTasks(monthlyTasksSaved)
      return
    }

    const currentIds = monthlyTasksSaved.map((monthlyTask) => monthlyTask.id)
    await saveMonthlyTask(userId, currentIds)
  }

  async function completeDailyTask(distance: number): Promise<number> {
    const taskNotCompleted = dailyTasks.filter((dailyTask) => !dailyTask.isCompleted)
    const taskValueFiltered = taskNotCompleted.filter((task) => task.value <= distance)
    taskValueFiltered.map((task) => (task.isCompleted = true))

    const completedIds = taskValueFiltered.map((task) => task.id)
    setDailyTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (completedIds.includes(task.id)) return { ...task, isCompleted: true }
        return task
      })
    )

    setDailyTaskRequest(taskValueFiltered)
    return taskValueFiltered.reduce((total, task) => total + task.reward, 0)
  }

  async function completeMonthlyTask(distance: number): Promise<number> {
    const aux = [...monthlyTasks]
    const taskNotCompleted = aux.filter((monthlyTask) => !monthlyTask.isCompleted)

    if (taskNotCompleted.length === 0) return 0

    taskNotCompleted.forEach((task) => {
      task.currentValue += distance
      if (task.currentValue >= task.value) task.isCompleted = true
    })

    const completedTask = taskNotCompleted.filter((task) => task.isCompleted)
    // const completedIds = completedTask.map((task) => task.id)
    // setMonthlyTasks((prevTasks) =>
    //   prevTasks.map((task) => {
    //     if (completedIds.includes(task.id)) return { ...task, isCompleted: true }
    //     return { ...task }
    //   })
    // )

    setMonthlyTaskRequest(taskNotCompleted)
    return completedTask.reduce((total, task) => total + task.reward, 0)
  }

  // private functions
  async function saveDailyTask(userId: string, currentIds?: string[]) {
    const newDailyTask = generateNewDailyTask(userId, currentIds)

    await setDailyTaskRequest(newDailyTask)
    setDailyTasks(newDailyTask)
  }

  function generateNewDailyTask(userId: string, ids?: string[]): DailyTaskProps[] {
    const taskGenerated = generateDailyTasks()
    const date = new Date()

    const currentIds = ids ?? generateUUID()

    const newDailyTasks = taskGenerated.map((task, i): DailyTaskProps => {
      return {
        id: currentIds[i],
        task: task.task,
        reward: task.reward,
        value: task.value,
        userId,
        day: date.getDay(),
        isCompleted: false
      }
    })

    return newDailyTasks
  }

  function generateUUID(): string[] {
    return [uuid.v4() as string, uuid.v4() as string]
  }

  async function saveMonthlyTask(userId: string, currentIds?: string[]) {
    const newMonthlyTask = generateNewMonthlyTask(userId, currentIds)

    await setMonthlyTaskRequest(newMonthlyTask)
    setMonthlyTasks(newMonthlyTask)
  }

  function generateNewMonthlyTask(userId: string, ids?: string[]): MonthlyTaskProps[] {
    const taskGenerated = generateMonthlyTasks()
    const date = new Date()

    const currentIds = ids ?? generateUUID()

    const newMonthlyTasks = taskGenerated.map((task, i): MonthlyTaskProps => {
      return {
        id: currentIds[i],
        task: task.task,
        reward: task.reward,
        value: task.value,
        userId,
        month: date.getMonth(),
        currentValue: 0,
        isCompleted: false
      }
    })

    return newMonthlyTasks
  }

  return (
    <TaskContext.Provider
      value={{
        dailyTasks,
        monthlyTasks,
        getDailyTask,
        getMonthlyTask,
        completeDailyTask,
        completeMonthlyTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
