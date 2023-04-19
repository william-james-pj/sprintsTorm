import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Card } from 'src/components/Card'
import { Coins } from 'src/components/Coins'

import * as S from './styles'

type Props = {
  item: BossType
  onPress: () => void
}

export function BattleLevelCell({ item, onPress }: Props) {
  return (
    <S.ViewWrapper>
      <S.ViewLevelContainer>
        <S.ViewLevel style={styles.borderLevel}></S.ViewLevel>
        <S.TextLevelNumber>{item.level}</S.TextLevelNumber>
      </S.ViewLevelContainer>

      <S.ViewContentContainer>
        <S.ViewCard>
          <RectButton onPress={onPress} style={styles.button}>
            <S.ViewCardContent isRight={item.level % 2 !== 0}>
              <S.ViewCardContainer>
                <Card width={60} hideName hideQtd />
              </S.ViewCardContainer>

              <S.ViewTextContainer isRight={item.level % 2 !== 0}>
                <S.TextTitle>Chefão X</S.TextTitle>
                <S.TextDescription isRight={item.level % 2 !== 0}>
                  Sua agilidade e habilidades de combate são incomparáveis
                </S.TextDescription>
              </S.ViewTextContainer>

              <S.ViewAward>
                <S.TextAward>Prémio</S.TextAward>
                <Coins coin={'100'} />
              </S.ViewAward>
            </S.ViewCardContent>
          </RectButton>
        </S.ViewCard>
      </S.ViewContentContainer>
    </S.ViewWrapper>
  )
}

const styles = StyleSheet.create({
  borderLevel: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'white'
  },
  button: {
    flex: 1
  }
})
