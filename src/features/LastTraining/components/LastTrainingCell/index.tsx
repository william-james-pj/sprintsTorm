import { Coins } from 'src/components/Coins'

import * as S from './styles'

export function LastTrainingCell() {
  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <S.ViewTextContainer>
          <S.TextType>Running</S.TextType>
          <S.TextDate>21/03, 10:32</S.TextDate>
        </S.ViewTextContainer>
      </S.ViewRow>

      <S.ViewAwardContainer>
        <Coins coin={10} />
        <S.TextDistance>5.65 km</S.TextDistance>
      </S.ViewAwardContainer>
    </S.ViewWrapper>
  )
}
