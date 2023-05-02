import { createContext, ReactNode, useState } from 'react'
import uuid from 'react-native-uuid'

import { getDailyTaskRequest, setDailyTaskRequest } from 'src/services/taskService'
import { generateDailyTasks } from 'src/utils/generateDailyTask'

type TaskContextType = {
  dailyTasks: DailyTaskProps[]
  getDailyTask: (userId: string) => Promise<void>
}

type TaskContextProviderProps = {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [dailyTasks, setDailyTasks] = useState<DailyTaskProps[]>([])

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
        day: date.getDay()
      }
    })

    return newDailyTasks
  }

  function generateUUID(): string[] {
    return [uuid.v4() as string, uuid.v4() as string]
  }

  return (
    <TaskContext.Provider value={{ dailyTasks, getDailyTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}
