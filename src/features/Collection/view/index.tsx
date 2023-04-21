import { useState } from 'react'
import { ImageBackground } from 'react-native'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { Section } from 'src/components/Section'
import { UserStatus } from 'src/components/UserStatus'
import { CardDetails } from 'src/features/Collection/components/CardDetailsModal'
import { useRewards } from 'src/hooks/useRewards'

import * as S from './styles'

export function CollectionScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const { rewards } = useRewards()

  const toggleModal = () => setIsModalVisible(!isModalVisible)

  return (
    <>
      <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
        <SafeAreaView style={{ flex: 1 }}>
          <S.ViewWrapper>
            <UserStatus coins={rewards?.coins ?? 0} />
            <S.ViewContent>
              <Section title="Coleção de cartas">
                <S.ViewCardRow>
                  <Card onPress={toggleModal} />
                  <Card onPress={toggleModal} />
                  <Card onPress={toggleModal} />
                </S.ViewCardRow>
              </Section>
            </S.ViewContent>
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
        <CardDetails />
      </Modal>
    </>
  )
}
