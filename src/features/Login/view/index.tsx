import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { ButtonGoogle } from 'src/features/Login/components/ButtonGoogle'
import { useAuth } from 'src/hooks/useAuth'

import * as S from './styles'

export function LoginScreen() {
  const { handleGoogleSignIn } = useAuth()

  const login = async () => {
    await handleGoogleSignIn()
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <S.ViewContainer>
            <S.TextAppName>SprintsTorm.io</S.TextAppName>

            <S.ViewFooter>
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
        </S.ViewWrapper>
      </SafeAreaView>
    </ImageBackground>
  )
}
