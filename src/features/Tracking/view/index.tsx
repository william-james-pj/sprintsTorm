import { useNavigation } from '@react-navigation/native'
import { LocationSubscription } from 'expo-location'
import { useEffect, useState } from 'react'
import Modal from 'react-native-modal'

import { TimeBox } from '../components/TimeBox'
import { TrackingButton } from '../components/TrackingButton'
import { TrackingHeader } from '../components/TrackingHeader'
import { TrackingMap } from '../components/TrackingMap'
import { TrackingModal } from '../components/TrackingModal'
import { getTimerString } from 'src/utils/getTimeString'

import * as S from './styles'

export function TrackingScreen() {
  const [traveledDistance, setTraveledDistance] = useState(0)
  const [timer, setTimer] = useState(0)
  const [watcher, setWatcher] = useState<LocationSubscription | null>(null)
  const [isStarted, setIsStarted] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const navigation = useNavigation()

  const setNewDistance = (newDistance: number) => {
    const newValue = newDistance + traveledDistance
    setTraveledDistance(newValue)
  }

  const setNewWatcher = (newWatcher: LocationSubscription) => {
    setWatcher(newWatcher)
  }

  const toggleModal = () => setIsModalVisible(!isModalVisible)

  const modalOnSave = () => {
    watcher?.remove()
    navigation.goBack()
  }

  const modalOnDiscard = () => {
    watcher?.remove()
    navigation.goBack()
  }

  useEffect(() => {
    if (!isStarted) return

    const interval = setInterval(() => {
      setTimer(timer + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer, isStarted])

  return (
    <>
      <S.ViewWrapper>
        <S.ViewHeader>
          <TrackingHeader title={'Correndo'} onClose={toggleModal} />
          <TrackingMap
            setNewDistance={setNewDistance}
            setWatcher={setNewWatcher}
            isStarted={isStarted}
          />
        </S.ViewHeader>
        <S.ViewFooter>
          <TimeBox distance={traveledDistance} time={getTimerString(timer)} />
          <S.ViewButtonContainer>
            {isStarted ? (
              <>
                <TrackingButton title="Pausar" onPress={() => setIsStarted(false)} />
                <TrackingButton title="Terminar" onPress={toggleModal} />
              </>
            ) : (
              <TrackingButton title="Iniciar" onPress={() => setIsStarted(true)} />
            )}
          </S.ViewButtonContainer>
        </S.ViewFooter>
      </S.ViewWrapper>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        statusBarTranslucent
        style={{ margin: 0, justifyContent: 'flex-end' }}
      >
        <TrackingModal onDiscard={modalOnDiscard} onSave={modalOnSave} />
      </Modal>
    </>
  )
}
