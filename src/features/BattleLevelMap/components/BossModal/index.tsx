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
  onPress: () => void
}

export function BossModal({ onPress, item }: Props) {
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
        <TouchableOpacity style={{ width: '100%' }} onPress={onPress}>
          <S.ViewButtonContent>
            {isLoadingBattle ? (
              <S.Indicator size="small" />
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
