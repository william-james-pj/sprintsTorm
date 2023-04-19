import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'

import XMarkSVG from 'src/assets/svg/xMark.svg'

import * as S from './styles'

interface Props {
  title: string
  onClose: () => void
}

export function BattleHeader({ title, onClose }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <S.ButtonWrapper>
        <RectButton onPress={onClose} style={styles.button}>
          <XMarkSVG fill={theme.colors.text} />
        </RectButton>
      </S.ButtonWrapper>

      <S.TextTitle>{title}</S.TextTitle>
    </S.ViewWrapper>
  )
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8
  }
})
