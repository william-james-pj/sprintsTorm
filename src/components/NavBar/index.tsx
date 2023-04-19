import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

import ChevronSVG from 'src/assets/svg/chevron-left.svg'

import * as S from './styles'

interface Props {
  title: string
}

export function NavBar({ title }: Props) {
  const navigation = useNavigation()
  const theme = useTheme()

  const clickGoBack = () => {
    navigation.goBack()
  }

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewContent>
          <S.ButtonWrapper>
            <RectButton onPress={clickGoBack} style={{ padding: 5, borderRadius: 8 }}>
              <ChevronSVG fill={theme.colors.text} />
            </RectButton>
          </S.ButtonWrapper>
          <S.TextTitle>{title}</S.TextTitle>
        </S.ViewContent>
      </SafeAreaView>
    </S.ViewWrapper>
  )
}
