import { Coins } from 'src/components/Coins'

import * as S from './styles'

type Props = {
  training: TrainingProps
}

export function LastTrainingCell({ training }: Props) {
  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <S.ViewTextContainer>
          <S.TextType>Running</S.TextType>
          <S.TextDate>21/03, 10:32</S.TextDate>
        </S.ViewTextContainer>
      </S.ViewRow>

      <S.ViewAwardContainer>
        <Coins coin={training.coins.toFixed(0)} />
        <S.TextDistance>{`${training.distance.toFixed(1)} km`}</S.TextDistance>
      </S.ViewAwardContainer>
    </S.ViewWrapper>
  )
}
