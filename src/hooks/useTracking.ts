import { useContext } from 'react'

import { TrackingContext } from 'src/contexts/TrackingContext'

export function useTracking() {
  const value = useContext(TrackingContext)

  return value
}
