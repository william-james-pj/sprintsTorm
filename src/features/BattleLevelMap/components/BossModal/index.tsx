import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

import SwordsSVG from 'src/assets/svg/swordsSmall.svg'
import { AbilityCard } from 'src/components/AbilityCard'
import { Card } from 'src/components/Card'
import { ClassTypeCard } from 'src/components/ClassTypeCard'
import { useBattle } from 'src/hooks/useBattle'
import { getEnemiesWeaknessName } from 'src/utils/getEnemiesWeaknessName'

import * as S from './styles'

type Props = {
  item: EnemiesProps
  isLeveBefore: boolean
  isLeveAfter: boolean
  onPress: () => void
}

export function BossModal({ onPress, isLeveBefore, isLeveAfter, item }: Props) {
  const theme = useTheme()
  const { isLoadingBattle } = useBattle()

  return (
    <S.ViewWrapper style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      <S.ViewDetails>
        <S.ViewTextContainer>
          <S.TextName>{item.name}</S.TextName>
          <S.TextDescription>{item.description}</S.TextDescription>
        </S.ViewTextContainer>
        <Card hideName hideQtd item={item} />
      </S.ViewDetails>

      <S.ViewAbility>
        <ClassTypeCard type={item.ability} />
        <AbilityCard type="weakness" value={getEnemiesWeaknessName(item.ability)} />
      </S.ViewAbility>

      <S.ViewButton>
        <TouchableOpacity
          style={{ width: '100%' }}
          onPress={onPress}
          disabled={isLeveAfter || isLeveBefore}
        >
          <S.ViewButtonContent>
            {isLoadingBattle ? (
              <S.Indicator size="small" />
            ) : isLeveAfter ? (
              <S.TextButtonText>Você ainda não alcançou esse nível</S.TextButtonText>
            ) : isLeveBefore ? (
              <S.TextButtonText>Você já superou esse nível</S.TextButtonText>
            ) : (
              <>
                <SwordsSVG fill={theme.colors.text} />
                <S.TextButtonText>Batalhar</S.TextButtonText>
              </>
            )}
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
