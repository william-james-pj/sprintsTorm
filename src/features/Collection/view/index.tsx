import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { Section } from 'src/components/Section'
import { UserStatus } from 'src/components/UserStatus'

import * as S from './styles'

export function CollectionScreen() {
  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <UserStatus />
          <S.ViewContent>
            <Section title="Coleção de cartas">
              <S.ViewCardRow>
                <Card />
                <Card />
                <Card />
              </S.ViewCardRow>
            </Section>
          </S.ViewContent>
        </S.ViewWrapper>
      </SafeAreaView>
    </ImageBackground>
  )
}
