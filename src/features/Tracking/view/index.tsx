import { LocationSubscription } from 'expo-location'
import { useState } from 'react'

import { TimeBox } from '../components/TimeBox'
import { TrackingButton } from '../components/TrackingButton'
import { TrackingHeader } from '../components/TrackingHeader'
import { TrackingMap } from '../components/TrackingMap'

import * as S from './styles'

export function TrackingScreen() {
  const [traveledDistance, setTraveledDistance] = useState(0)
  const [watcher, setWatcher] = useState<LocationSubscription | null>(null)

  const setNewDistance = (newDistance: number) => {
    const newValue = newDistance + traveledDistance
    setTraveledDistance(newValue)
  }

  const setNewWatcher = (newWatcher: LocationSubscription) => {
    setWatcher(newWatcher)
  }

  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <TrackingHeader title={'Correndo'} onClose={() => {}} />
        <TrackingMap setNewDistance={setNewDistance} setWatcher={setNewWatcher} />
      </S.ViewHeader>
      <S.ViewFooter>
        <TimeBox distance={traveledDistance} />
        <S.ViewButtonContainer>
          <TrackingButton title="Pausar" onPress={() => {}} />
          <TrackingButton
            title="Terminar"
            onPress={() => {
              watcher?.remove()
              console.log('terminar')
            }}
          />
        </S.ViewButtonContainer>
      </S.ViewFooter>
    </S.ViewWrapper>
  )
}
