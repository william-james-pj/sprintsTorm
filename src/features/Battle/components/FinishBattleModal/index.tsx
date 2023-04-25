import { TouchableOpacity } from 'react-native'

import { Coins } from 'src/components/Coins'
import { useStatus } from 'src/hooks/useStatus'

import * as S from './styles'

type Props = {
  coins: number
  bossName: string
  onCLose: () => void
}

export function FinishBattleModal({ coins, bossName, onCLose }: Props) {
  const { finishBattle, isLoading } = useStatus()

  const onFinish = async () => {
    await finishBattle(coins)
    onCLose()
  }

  return (
    <S.ViewWrapper>
      <S.ViewTextContainer>
        <S.TextTitle>Parabéns!</S.TextTitle>
        <S.TextSubTitle>
          {`O ${bossName} não foi páreo para você! Sua habilidade e estratégia foram cruciais para superar esse desafio épico.`}
        </S.TextSubTitle>
      </S.ViewTextContainer>

      <S.ViewContent>
        <S.ViewRewardContainer>
          <S.ViewReward>
            <Coins coin={`+${coins}`} />
          </S.ViewReward>
        </S.ViewRewardContainer>
      </S.ViewContent>

      <S.ViewButton>
        <TouchableOpacity style={{ width: '100%' }} onPress={onFinish}>
          <S.ViewButtonContent>
            {isLoading ? <S.Indicator size="small" /> : <S.TextButtonText>OK</S.TextButtonText>}
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
