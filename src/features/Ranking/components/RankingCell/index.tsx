import * as S from './styles'

export function RankingCell() {
  return (
    <S.ViewWrapper>
      <S.ViewRow>
        <S.TextPosition>4</S.TextPosition>
        <S.ViewCircleContainer></S.ViewCircleContainer>
        <S.TextName>UserName</S.TextName>
      </S.ViewRow>

      <S.TextDistance>330 km</S.TextDistance>
    </S.ViewWrapper>
  )
}
