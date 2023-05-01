import { createContext, ReactNode, useState } from 'react'
import uuid from 'react-native-uuid'

import { generateDailyTasks } from 'src/utils/generateDailyTask'

type TaskContextType = {
  dailyTasks: DailyTaskProps[]
  getDailyTask: (userId: string) => void
}

type TaskContextProviderProps = {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider(props: TaskContextProviderProps) {
  const [dailyTasks, setDailyTasks] = useState<DailyTaskProps[]>([])

  function getDailyTask(userId: string) {
    // get daily reward
    // if found, save it
    // else create new reward
    const newDailyTask = generateNewDailyTask(userId)

    // save daily tasks
    setDailyTasks(newDailyTask)

    // delete old daily tasks
  }

  // private functions
  function generateNewDailyTask(userId: string): DailyTaskProps[] {
    const taskGenerated = generateDailyTasks()
    const date = new Date()

    const newDailyTasks = taskGenerated.map((task): DailyTaskProps => {
      return {
        id: uuid.v4() as string,
        task: task.task,
        reward: task.reward,
        value: task.value,
        userId,
        day: date.getDay()
      }
    })

    return newDailyTasks
  }

  return (
    <TaskContext.Provider value={{ dailyTasks, getDailyTask }}>
      {props.children}
    </TaskContext.Provider>
  )
}
