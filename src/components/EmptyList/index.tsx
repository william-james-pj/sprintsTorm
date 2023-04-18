import * as S from './styles'

interface Props {
  title: string
  subTitle: string
}

export function EmptyList({ title, subTitle }: Props) {
  return (
    <S.ViewWrapper>
      <S.TextTitle>{title}</S.TextTitle>
      <S.TextSubTitle>{subTitle}</S.TextSubTitle>
    </S.ViewWrapper>
  )
}
