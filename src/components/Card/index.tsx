import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

type CardProps = {
  width?: number
  hideName?: boolean
  hideQtd?: boolean
  qtd?: string
  onPress?: () => void
}

export function Card({
  width = 100,
  hideName = false,
  hideQtd = false,
  onPress = () => {},
  qtd = '0'
}: CardProps) {
  return (
    <S.ViewWrapper style={{ width, height: width + 20 }}>
      <RectButton onPress={onPress} style={{ flex: 1, padding: 4 }}>
        <S.ViewContent>
          {!hideQtd && (
            <S.ViewQtdContainer style={{ borderBottomStartRadius: 4 }}>
              <S.TextQtd>{qtd}</S.TextQtd>
            </S.ViewQtdContainer>
          )}

          {!hideName && (
            <S.ViewNameContainer>
              <S.TextName>Name</S.TextName>
            </S.ViewNameContainer>
          )}
        </S.ViewContent>
      </RectButton>
    </S.ViewWrapper>
  )
}
