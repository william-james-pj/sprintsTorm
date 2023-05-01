import { useContext } from 'react'

import { TaskContext } from 'src/contexts/TaskContext'

export function useTask() {
  const value = useContext(TaskContext)

  return value
}
