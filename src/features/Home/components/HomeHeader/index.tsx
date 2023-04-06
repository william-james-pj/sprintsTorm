import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

type HomeHeaderProps = {
  userName: string
}

export function HomeHeader({ userName }: HomeHeaderProps) {
  return (
    <S.ViewWrapper>
      <S.ViewTextContainer>
        <S.TextUserName>Olá, {userName}</S.TextUserName>
        <S.TextMessage>Correr é a melhor terapia</S.TextMessage>
      </S.ViewTextContainer>
      <S.ViewUserContainer>
        <RectButton style={{ flex: 1 }} onPress={() => {}}></RectButton>
      </S.ViewUserContainer>
    </S.ViewWrapper>
  )
}
