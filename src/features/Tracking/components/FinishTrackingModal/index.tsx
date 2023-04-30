import { TouchableOpacity } from 'react-native'

import { Coins } from 'src/components/Coins'
import { useTracking } from 'src/hooks/useTracking'

import * as S from './styles'

type Props = {
  onClick: () => void
}

export function FinishTrackingModal({ onClick }: Props) {
  const { coinsEarned, isTrackingLoading } = useTracking()

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
        <S.ViewRewardContainer>
          <S.ViewReward>
            <Coins coin={`+${coinsEarned}`} />
          </S.ViewReward>
        </S.ViewRewardContainer>
      </S.ViewContent>

      <S.ViewButton>
        <TouchableOpacity style={{ width: '100%' }} onPress={onClick}>
          <S.ViewButtonContent>
            {isTrackingLoading ? (
              <S.Indicator size="small" />
            ) : (
              <S.TextButtonText>OK</S.TextButtonText>
            )}
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
