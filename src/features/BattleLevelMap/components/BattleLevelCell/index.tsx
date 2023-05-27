import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Card } from 'src/components/Card'
import { Coins } from 'src/components/Coins'
import { useStatus } from 'src/hooks/useStatus'
import { calculateCoins } from 'src/utils/calculateCoins'

import * as S from './styles'

type Props = {
  item: EnemiesProps
  isLeveBefore: boolean
  onPress: () => void
}

export function BattleLevelCell({ item, onPress, isLeveBefore }: Props) {
  const { status } = useStatus()

  return (
    <S.ViewWrapper>
      <S.ViewLevelContainer>
        <S.ViewLevel isLeveBefore={isLeveBefore} style={styles.borderLevel}></S.ViewLevel>
        <S.TextLevelNumber>{item.level}</S.TextLevelNumber>
      </S.ViewLevelContainer>

      <S.ViewContentContainer>
        <S.ViewCard>
          <RectButton onPress={onPress} style={styles.button}>
            <S.ViewCardContent isRight={item.level % 2 !== 0}>
              <S.ViewCardContainer>
                <Card width={60} hideName hideQtd item={item} />
              </S.ViewCardContainer>

              <S.ViewTextContainer isRight={item.level % 2 !== 0}>
                <S.TextTitle>{item.name}</S.TextTitle>
                <S.TextDescription
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  isRight={item.level % 2 !== 0}
                >
                  {item.description}
                </S.TextDescription>
              </S.ViewTextContainer>

              <S.ViewAward>
                <S.TextAward>Prémio</S.TextAward>
                <Coins coin={`${calculateCoins(status?.round ?? 1, item.level)}`} />
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
