import { TouchableOpacity } from 'react-native'

import { Card } from 'src/components/Card'
import { Coins } from 'src/components/Coins'
import { Experience } from 'src/components/Experience'

import * as S from './styles'

export function FinishTrackingModal() {
  return (
    <S.ViewWrapper>
      <S.ViewTextContainer>
        <S.TextTitle>Corrida finalizada</S.TextTitle>
        <S.TextSubTitle>
          Correr não é só uma atividade física, é um estilo de vida. Parabéns por fazer parte desse
          movimento!
        </S.TextSubTitle>
      </S.ViewTextContainer>

      <S.ViewContent>
        <Card width={70} hideName qtd="+1" />

        <S.ViewRewardContainer>
          <S.ViewReward>
            <Coins coin={'+20'} />
          </S.ViewReward>
          <S.ViewReward>
            <Experience experience={'+15'} />
          </S.ViewReward>
        </S.ViewRewardContainer>
      </S.ViewContent>

      <S.ViewButton>
        <TouchableOpacity style={{ width: '100%' }} onPress={() => {}}>
          <S.ViewButtonContent>
            <S.TextButtonText>OK</S.TextButtonText>
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
