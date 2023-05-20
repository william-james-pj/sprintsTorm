import { format } from 'date-fns'

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
          <S.TextDate>{`${format(training.date, 'dd/MM, HH:mm')}`}</S.TextDate>
        </S.ViewTextContainer>
      </S.ViewRow>

      <S.ViewAwardContainer>
        <S.TextDistance>{`${training.distance.toFixed(1)} km`}</S.TextDistance>
      </S.ViewAwardContainer>
    </S.ViewWrapper>
  )
}
