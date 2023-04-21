import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Card } from 'src/components/Card'
import { Coins } from 'src/components/Coins'
import { useRewards } from 'src/hooks/useRewards'
import { calculateCoins } from 'src/utils/calculateCoins'

import * as S from './styles'

type Props = {
  item: EnemiesProps
  isLeveBefore: boolean
  isLeveAfter: boolean
  onPress: () => void
}

export function BattleLevelCell({ item, onPress, isLeveBefore, isLeveAfter }: Props) {
  const { rewards } = useRewards()

  return (
    <S.ViewWrapper>
      <S.ViewLevelContainer>
        <S.ViewLevel isLeveBefore={isLeveBefore} style={styles.borderLevel}></S.ViewLevel>
        <S.TextLevelNumber>{item.level}</S.TextLevelNumber>
      </S.ViewLevelContainer>

      <S.ViewContentContainer>
        <S.ViewCard>
          <RectButton
            onPress={onPress}
            style={styles.button}
            enabled={!isLeveAfter && !isLeveBefore}
          >
            <S.ViewCardContent isRight={item.level % 2 !== 0}>
              <S.ViewCardContainer>
                <Card width={60} hideName hideQtd />
              </S.ViewCardContainer>

              <S.ViewTextContainer isRight={item.level % 2 !== 0}>
                <S.TextTitle>{item.name}</S.TextTitle>
                <S.TextDescription isRight={item.level % 2 !== 0}>
                  Sua agilidade e habilidades de combate são incomparáveis
                </S.TextDescription>
              </S.ViewTextContainer>

              <S.ViewAward>
                <S.TextAward>Prémio</S.TextAward>
                <Coins coin={`${calculateCoins(rewards?.round ?? 1, item.level)}`} />
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
