import * as S from './styles'

export function LifeBar() {
  return (
    <S.ViewWrapper>
      <S.TextLife>2000/25000</S.TextLife>
      <S.ViewLife style={{ width: '80%' }} />
    </S.ViewWrapper>
  )
}
