import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { ButtonLarge } from 'src/components/ButtonLarge'
import { TextInput } from 'src/components/TextInput'
import { LogoutNavigationProp } from 'src/constants/navigationTypes'
import { useAuth } from 'src/hooks/useAuth'
import { emailValidator } from 'src/utils/emailValidator'

import * as S from './styles'

export function SignUp() {
  const navigation = useNavigation<LogoutNavigationProp>()
  const { signin, isLoading } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validatedStatus, setValidatedStatus] = useState(true)

  const handleSignIn = async () => {
    if (!name.trim().length || !email.trim().length || !password.trim().length) return

    if (!validatedStatus) return
    await signin(name, email, password)
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <S.ViewWrapper>
              <S.ViewContainer>
                <S.TextAppName>SprintsTorm.io</S.TextAppName>

                <S.ViewContentWrapper>
                  <TextInput placeholder={'Nome'} onChangeText={setName} value={name} />
                  <TextInput
                    placeholder={'E-mail'}
                    onChangeText={setEmail}
                    value={email}
                    errorText={'Por favor insira um endereço de e-mail válido'}
                    keyboardType={'email-address'}
                  />
                  <TextInput
                    placeholder={'Senha'}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                  />

                  <ButtonLarge onPress={handleSignIn} text={'Entrar'} isLoading={isLoading} />
                </S.ViewContentWrapper>

                <S.ViewFooter>
                  <S.ViewButtonGap>
                    <S.TextMessage>Já tem uma conta?</S.TextMessage>
                    <BorderlessButton onPress={() => navigation.navigate('Login')}>
                      <S.ButtonText>Entrar</S.ButtonText>
                    </BorderlessButton>
                  </S.ViewButtonGap>
                </S.ViewFooter>
              </S.ViewContainer>
            </S.ViewWrapper>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  )
}
