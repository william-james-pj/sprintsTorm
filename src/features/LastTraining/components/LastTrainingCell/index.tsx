import * as S from './styles'

export function LastTrainingCell() {
  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <S.ViewCircleContainer></S.ViewCircleContainer>
        <S.ViewTextContainer>
          <S.TextType>Running</S.TextType>
          <S.TextDate>21/03, 10:32</S.TextDate>
        </S.ViewTextContainer>
      </S.ViewRow>

      <S.TextDistance>5.65 km</S.TextDistance>
    </S.ViewWrapper>
  )
}
