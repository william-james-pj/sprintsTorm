import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ImageBackground } from 'react-native'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { BattleHeader } from 'src/features/Battle/components/BattleHeader'
import { FinishBattleModal } from 'src/features/Battle/components/FinishBattleModal'
import { LifeBar } from 'src/features/Battle/components/LifeBar'
import { useAuth } from 'src/hooks/useAuth'
import { useBattle } from 'src/hooks/useBattle'
import { useDebounce } from 'src/hooks/useDebounce'
import { useStatus } from 'src/hooks/useStatus'
import { useWarriors } from 'src/hooks/useWarriors'
import { calculateCoins } from 'src/utils/calculateCoins'

import * as S from './styles'

export function BattleScreen() {
  const navigation = useNavigation<HomeNavigationProp>()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { user } = useAuth()
  const { status } = useStatus()
  const { warriors, userArmy, updateUserArmy, lostWarrior } = useWarriors()
  const { enemy, totalLife, currentLife, handleBattle, lastDamage, saveBattleLevel } = useBattle()

  const toggleModal = () => setIsModalVisible(!isModalVisible)

  const selectWarrior = (warrior: WarriorsProps) => {
    handleBattle(warrior, toggleModal, lostWarrior)
    debouncedRequest()
  }

  const debouncedRequest = useDebounce(() => {
    if (!user) return
    updateUserArmy(user.id)
    saveBattleLevel(user.id)
  })

  const finishBattle = () => {
    toggleModal()
    navigation.goBack()
  }

  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
        <SafeAreaView style={{ flex: 1 }}>
          <S.ViewWrapper>
            <S.ViewHeader>
              <BattleHeader title={`Level ${enemy?.level}`} onClose={() => navigation.goBack()} />

              <S.ViewBoss>
                <Card width={140} hideQtd qtd={1} enemy={enemy ?? undefined} />

                <LifeBar currentLife={currentLife} life={totalLife} />

                {lastDamage && (
                  <S.ViewLastDamage>
                    <S.TextLastDamage>{`-${lastDamage}`}</S.TextLastDamage>
                  </S.ViewLastDamage>
                )}
              </S.ViewBoss>
            </S.ViewHeader>

            <S.ViewFooter>
              <S.ViewCardsContainer style={{ borderTopStartRadius: 16 }}>
                <S.ViewCards>
                  {warriors.map((warrior) => (
                    <Card
                      width={80}
                      key={warrior.id}
                      item={warrior}
                      qtd={userArmy ? userArmy[warrior.ability] : 0}
                      onPress={() => selectWarrior(warrior)}
                      canBeDisabled
                    />
                  ))}
                </S.ViewCards>
              </S.ViewCardsContainer>
            </S.ViewFooter>
          </S.ViewWrapper>
        </SafeAreaView>
      </ImageBackground>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        statusBarTranslucent
        style={{}}
      >
        <FinishBattleModal
          coins={calculateCoins(status?.round ?? 1, enemy?.level ?? 1)}
          bossName={enemy?.name ?? ''}
          onCLose={finishBattle}
        />
      </Modal>
    </>
  )
}
