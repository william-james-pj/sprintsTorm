import { Image } from 'expo-image'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

type Props = {
  width?: number
  hideName?: boolean
  hideQtd?: boolean
  qtd?: number
  item?: WarriorsProps | EnemiesProps
  canBeDisabled?: boolean
  onPress?: () => void
}

export function Card({
  width = 100,
  hideName = false,
  hideQtd = false,
  onPress = () => {},
  qtd = 0,
  item,
  canBeDisabled = false
}: Props) {
  return (
    <S.ViewWrapper style={{ width, height: width + 20 }} isDisabled={qtd === 0}>
      <RectButton
        onPress={onPress}
        style={{ flex: 1, padding: 4 }}
        enabled={!(qtd === 0 && canBeDisabled)}
      >
        <S.ViewContent>
          {item && (
            <Image style={styles.image} source={item.img} contentFit="cover" transition={500} />
          )}

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

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553'
  }
})
