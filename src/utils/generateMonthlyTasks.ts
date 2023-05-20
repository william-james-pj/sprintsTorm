import { monthlyTasks } from 'src/constants/monthlyTasks'

export const generateMonthlyTasks = (): InternalTaskProps[] => {
  const aux = monthlyTasks

  const firstItem = aux[Math.floor(Math.random() * aux.length)]

  const filtered = aux.filter((value) => value.value !== firstItem.value)

  const secondItem = filtered[Math.floor(Math.random() * filtered.length)]

  return [firstItem, secondItem]
}
