import { useState } from 'react'
import { ImageBackground } from 'react-native'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { Section } from 'src/components/Section'
import { UserStatus } from 'src/components/UserStatus'
import { CardDetails } from 'src/features/Collection/components/CardDetailsModal'
import { useAuth } from 'src/hooks/useAuth'
import { useStatus } from 'src/hooks/useStatus'
import { useWarriors } from 'src/hooks/useWarriors'

import * as S from './styles'

export function CollectionScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [indexSelected, setIndexSelected] = useState(0)

  const { user } = useAuth()
  const { status, updateStatus, updateCoins } = useStatus()
  const { warriors, userArmy, buyWarrior, updateUserArmy } = useWarriors()

  const toggleModal = () => setIsModalVisible(!isModalVisible)

  const closeModal = () => {
    if (!user) return
    toggleModal()
    Promise.all([updateStatus(user.id), updateUserArmy(user.id)])
  }

  const opemModal = (index: number) => {
    setIndexSelected(index)
    toggleModal()
  }

  const handleBuy = (type: WarriorAbilityTypeProps) => {
    if (!status) return
    buyWarrior(type, status.coins, updateCoins)
  }

  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
        <SafeAreaView style={{ flex: 1 }}>
          <S.ViewWrapper>
            <UserStatus />
            <S.ViewContent>
              <Section title="Coleção de cartas">
                <S.ViewCardRow>
                  {warriors.map((warrior, index) => (
                    <Card
                      key={warrior.id}
                      onPress={() => opemModal(index)}
                      item={warrior}
                      qtd={userArmy ? userArmy[warrior.ability] : 0}
                    />
                  ))}
                </S.ViewCardRow>
              </Section>
            </S.ViewContent>
          </S.ViewWrapper>
        </SafeAreaView>
      </ImageBackground>
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        swipeDirection="down"
        onSwipeComplete={closeModal}
        statusBarTranslucent
        style={{}}
      >
        <CardDetails onBuy={handleBuy} item={warriors[indexSelected]} />
      </Modal>
    </>
  )
}
