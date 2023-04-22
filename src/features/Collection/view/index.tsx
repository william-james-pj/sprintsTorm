import { useState } from 'react'
import { ImageBackground } from 'react-native'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { Section } from 'src/components/Section'
import { UserStatus } from 'src/components/UserStatus'
import { CardDetails } from 'src/features/Collection/components/CardDetailsModal'
import { useStatus } from 'src/hooks/useStatus'
import { useWarriors } from 'src/hooks/useWarriors'

import * as S from './styles'

export function CollectionScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { status } = useStatus()
  const { warriors } = useWarriors()

  const toggleModal = () => setIsModalVisible(!isModalVisible)

  const closeModal = () => {
    toggleModal()
    console.log('closeModal')
  }

  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
        <SafeAreaView style={{ flex: 1 }}>
          <S.ViewWrapper>
            <UserStatus coins={status?.coins ?? 0} />
            <S.ViewContent>
              <Section title="Coleção de cartas">
                <S.ViewCardRow>
                  {warriors.map((warrior) => (
                    <Card key={warrior.id} onPress={toggleModal} item={warrior} />
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
        <CardDetails />
      </Modal>
    </>
  )
}
