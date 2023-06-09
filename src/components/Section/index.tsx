import { ReactNode } from 'react'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

type Props = {
  title: string
  buttonText?: string
  buttonTextOnPress?: () => void
  children?: ReactNode
}

export function Section({ title, children, buttonText, buttonTextOnPress = () => {} }: Props) {
  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <S.TextTitle>{title}</S.TextTitle>

        {buttonText && (
          <RectButton style={styles.viewAllButton} onPress={buttonTextOnPress}>
            <S.TextButton>{buttonText}</S.TextButton>
          </RectButton>
        )}
      </S.ViewHeader>
      {children}
    </S.ViewWrapper>
  )
}

const styles = StyleSheet.create({
  viewAllButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    zIndex: 99
  }
})
