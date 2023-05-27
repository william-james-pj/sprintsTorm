import { useNavigation } from '@react-navigation/native'
import { LocationSubscription } from 'expo-location'
import { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'
import Modal from 'react-native-modal'

import BackgroundImg from 'src/assets/img/background.png'
import { FinishTrackingModal } from 'src/features/Tracking/components/FinishTrackingModal'
import { TimeBox } from 'src/features/Tracking/components/TimeBox'
import { TrackingButton } from 'src/features/Tracking/components/TrackingButton'
import { TrackingHeader } from 'src/features/Tracking/components/TrackingHeader'
import { TrackingMap } from 'src/features/Tracking/components/TrackingMap'
import { TrackingModal } from 'src/features/Tracking/components/TrackingModal'
import { useAuth } from 'src/hooks/useAuth'
import { useStatus } from 'src/hooks/useStatus'
import { useTask } from 'src/hooks/useTask'
import { useTracking } from 'src/hooks/useTracking'
import { useWarriors } from 'src/hooks/useWarriors'
import { getTimerString } from 'src/utils/getTimeString'

import * as S from './styles'

export function TrackingScreen() {
  const [traveledDistance, setTraveledDistance] = useState(0) // km
  const [timer, setTimer] = useState(0)
  const [watcher, setWatcher] = useState<LocationSubscription | null>(null)
  const [isStarted, setIsStarted] = useState(false)
  const [isMapLoaded, setMapLoaded] = useState(true)

  const [isSureModalVisible, setIsSureModalVisible] = useState(false)
  const [isFinishModalVisible, setIsFinishModalVisible] = useState(false)

  const navigation = useNavigation()
  const { user } = useAuth()
  const { winWarrior } = useWarriors()
  const { status, updateCoins } = useStatus()
  const { completeDailyTask, completeWeeklyTask, completeMonthlyTask } = useTask()
  const { calculateEarnedWarriors, alliesEarned, saveTracking } = useTracking()

  const setNewDistance = (newDistance: number) => {
    const newValue = newDistance + traveledDistance
    setTraveledDistance(Math.round((newValue + Number.EPSILON) * 100) / 100)
  }

  const setNewWatcher = (newWatcher: LocationSubscription) => {
    setWatcher(newWatcher)
  }

  const toggleSureModal = () => setIsSureModalVisible(!isSureModalVisible)

  const toggleFinishModal = () => setIsFinishModalVisible(!isFinishModalVisible)

  const toogleMapLoaded = () => setMapLoaded(!isMapLoaded)

  const onFinishSave = async () => {
    if (!user || !status || !alliesEarned) return
    winWarrior(user.id, alliesEarned)
    await saveTracking(user.id, traveledDistance)

    const dailyTaskReward = await completeDailyTask(traveledDistance)
    const weeklyTaskReward = await completeWeeklyTask(traveledDistance)
    const monthlyTaskReward = await completeMonthlyTask(traveledDistance)
    const allCoins = status.coins + dailyTaskReward + weeklyTaskReward + monthlyTaskReward
    updateCoins(allCoins, user.id)
    toggleFinishModal()
    navigation.goBack()
  }

  const modalOnSave = () => {
    watcher?.remove()
    calculateEarnedWarriors(traveledDistance)
    setIsStarted(false)
    toggleSureModal()
    toggleFinishModal()
  }

  const modalOnDiscard = () => {
    watcher?.remove()
    setIsStarted(false)
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
      <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
        <S.ViewWrapper>
          <S.ViewHeader>
            <TrackingHeader title={'Correndo'} onClose={toggleSureModal} />
            <TrackingMap
              setNewDistance={setNewDistance}
              setWatcher={setNewWatcher}
              toogleMapLoaded={toogleMapLoaded}
              isStarted={isStarted}
            />
          </S.ViewHeader>
          <S.ViewFooter>
            <TimeBox distance={traveledDistance} time={getTimerString(timer)} />
            <S.ViewButtonContainer>
              {isStarted ? (
                <>
                  <TrackingButton title="Pausar" onPress={() => setIsStarted(false)} />
                  <TrackingButton title="Terminar" onPress={toggleSureModal} />
                </>
              ) : (
                <TrackingButton
                  isDisabled={isMapLoaded}
                  title="Iniciar"
                  onPress={() => setIsStarted(true)}
                />
              )}
            </S.ViewButtonContainer>
          </S.ViewFooter>
        </S.ViewWrapper>
      </ImageBackground>
      <Modal
        isVisible={isSureModalVisible}
        onBackButtonPress={toggleSureModal}
        onBackdropPress={toggleSureModal}
        swipeDirection="down"
        onSwipeComplete={toggleSureModal}
        statusBarTranslucent
        style={{ margin: 0, justifyContent: 'flex-end' }}
      >
        <TrackingModal onDiscard={modalOnDiscard} onSave={modalOnSave} />
      </Modal>
      <Modal
        isVisible={isFinishModalVisible}
        onBackButtonPress={onFinishSave}
        onBackdropPress={onFinishSave}
        statusBarTranslucent
        style={{}}
      >
        <FinishTrackingModal onClick={onFinishSave} />
      </Modal>
    </>
  )
}
