import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

type Props = {
  width?: number
  hideName?: boolean
  hideQtd?: boolean
  qtd?: number
  item?: WarriorsProps
  onPress?: () => void
}

export function Card({
  width = 100,
  hideName = false,
  hideQtd = false,
  onPress = () => {},
  qtd = 0,
  item
}: Props) {
  return (
    <S.ViewWrapper style={{ width, height: width + 20 }} isDisabled={qtd === 0}>
      <RectButton onPress={onPress} style={{ flex: 1, padding: 4 }}>
        <S.ViewContent>
          {!hideQtd && (
            <S.ViewQtdContainer style={{ borderBottomStartRadius: 4 }} isDisabled={qtd === 0}>
              <S.TextQtd>{qtd}</S.TextQtd>
            </S.ViewQtdContainer>
          )}

          {!hideName && (
            <S.ViewNameContainer isDisabled={qtd === 0}>
              <S.TextName>{item?.name}</S.TextName>
            </S.ViewNameContainer>
          )}
        </S.ViewContent>
      </RectButton>
    </S.ViewWrapper>
  )
}
