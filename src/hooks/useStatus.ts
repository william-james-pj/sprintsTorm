import { useContext } from 'react'

import { StatusContext } from '../contexts/StatusContext'

export function useStatus() {
  const value = useContext(StatusContext)

  return value
}
