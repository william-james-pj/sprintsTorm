import { weeklyTasks } from 'src/constants/weeklyTasks'

export const generateWeeklyTasks = (): InternalTaskProps[] => {
  const aux = weeklyTasks

  const firstItem = aux[Math.floor(Math.random() * aux.length)]

  const filtered = aux.filter((value) => value.value !== firstItem.value)

  const secondItem = filtered[Math.floor(Math.random() * filtered.length)]

  return [firstItem, secondItem]
}
