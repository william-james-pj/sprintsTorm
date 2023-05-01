import { dailyTasks } from 'src/constants/dailyTasks'

export const generateDailyTasks = (): DailyTaskInternalProps[] => {
  const aux = dailyTasks

  const firstItem = aux[Math.floor(Math.random() * aux.length)]

  const filtered = aux.filter((value) => value.value !== firstItem.value)

  const secondItem = filtered[Math.floor(Math.random() * filtered.length)]

  return [firstItem, secondItem]
}
