import { Image } from 'expo-image'
import { SafeAreaView } from 'react-native-safe-area-context'

import img from 'src/assets/img/welcomeImage.png'
import { ButtonGoogle } from 'src/features/Login/components/ButtonGoogle'
import { useAuth } from 'src/hooks/useAuth'

import * as S from './styles'

export function LoginScreen() {
  const { promptAsync } = useAuth()

  const login = async () => {
    await promptAsync()
  }

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewContainer>
          <S.TextAppName>SprintsTorm.io</S.TextAppName>

          <S.ViewFooter>
            <S.ImageWrapper>
              <Image style={{ width: 190, height: 153 }} source={img} contentFit="fill" />
            </S.ImageWrapper>
            <S.ViewTextGap>
              <S.TextSubTitle>Transforme sua corrida em uma aventura com</S.TextSubTitle>
              <S.TextTitle>SprintsTorm.io</S.TextTitle>
            </S.ViewTextGap>
            <S.ViewButtonGap>
              <S.TextMessage>Uma vida saudável começa com um passo</S.TextMessage>
              <ButtonGoogle onPress={login} />
            </S.ViewButtonGap>
          </S.ViewFooter>
        </S.ViewContainer>
      </SafeAreaView>
    </S.ViewWrapper>
  )
}
