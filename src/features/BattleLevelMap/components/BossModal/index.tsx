import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'

import SwordsSVG from 'src/assets/svg/swordsSmall.svg'
import { AbilityCard } from 'src/components/AbilityCard'
import { Card } from 'src/components/Card'

import * as S from './styles'

type Props = {
  item: EnemiesProps
  onPress: () => void
}

export function BossModal({ onPress, item }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      <S.ViewDetails>
        <S.ViewTextContainer>
          <S.TextName>{item.name}</S.TextName>
          <S.TextDescription>
            Sua agilidade e habilidades de combate são incomparáveis, fazendo dele um dos inimigos
            mais difíceis de se vencer. Derrotá-lo exigirá muita habilidade e estratégia.
          </S.TextDescription>
        </S.ViewTextContainer>
        <Card hideName hideQtd />
      </S.ViewDetails>

      <S.ViewAbility>
        <AbilityCard type="weakness" />
        <AbilityCard type="resistance" />
      </S.ViewAbility>

      <S.ViewButton>
        <TouchableOpacity style={{ width: '100%' }} onPress={onPress}>
          <S.ViewButtonContent>
            <SwordsSVG fill={theme.colors.text} />
            <S.TextButtonText>Batalhar</S.TextButtonText>
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
