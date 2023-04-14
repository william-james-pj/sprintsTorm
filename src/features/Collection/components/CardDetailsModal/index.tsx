import { TouchableOpacity } from 'react-native'

import { AbilityCard } from 'src/components/AbilityCard'
import { Card } from 'src/components/Card'
import { Coins } from 'src/components/Coins'

import * as S from './styles'

export function CardDetails() {
  return (
    <S.ViewWrapper>
      <S.ViewDetails>
        <Card />
        <S.ViewTextContainer>
          <S.TextName>Name</S.TextName>
          <S.TextDescription>
            Sua agilidade e habilidades de combate são incomparáveis, fazendo dele um dos inimigos
            mais difíceis de se vencer. Derrotá-lo exigirá muita habilidade e estratégia.
          </S.TextDescription>
        </S.ViewTextContainer>
      </S.ViewDetails>

      <S.ViewAbility>
        <AbilityCard type="weakness" />
        <AbilityCard type="resistance" />
      </S.ViewAbility>

      <S.ViewButton>
        <TouchableOpacity style={{ width: '100%' }} onPress={() => {}}>
          <S.ViewButtonContent>
            <Coins coin={50} />
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
