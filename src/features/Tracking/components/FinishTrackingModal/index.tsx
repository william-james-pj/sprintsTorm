import { TouchableOpacity } from 'react-native'

import { Card } from 'src/components/Card'
import { useTracking } from 'src/hooks/useTracking'
import { useWarriors } from 'src/hooks/useWarriors'

import * as S from './styles'

type Props = {
  onClick: () => void
}

export function FinishTrackingModal({ onClick }: Props) {
  const { alliesEarned, isTrackingLoading } = useTracking()
  const properties: WarriorAbilityTypeProps[] = ['warrior', 'mage', 'archer']
  const { warriors } = useWarriors()

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
          {alliesEarned
            ? properties.map((value) => {
                const qtd = alliesEarned![value]
                if (qtd > 0) {
                  return (
                    <Card
                      key={value}
                      width={70}
                      qtd={qtd}
                      showPlusSign
                      item={warriors.find((w) => w.ability === value)}
                    />
                  )
                }
              })
            : null}
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
