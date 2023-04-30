import React from 'react'
import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

type ButtonLargeProps = {
  text: string
  onPress: () => void
  isLoading?: boolean
}

export function ButtonLarge({ onPress, text, isLoading = false }: ButtonLargeProps) {
  return (
    <S.Wrapper>
      <RectButton onPress={onPress}>
        <S.Button>{isLoading ? <S.Indicator size="small" /> : <S.Text>{text}</S.Text>}</S.Button>
      </RectButton>
    </S.Wrapper>
  )
}
