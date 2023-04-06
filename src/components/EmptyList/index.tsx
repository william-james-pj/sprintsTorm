import * as S from './styles'

interface EmptyListProps {
  title: string
  subTitle: string
}

export function EmptyList({ title, subTitle }: EmptyListProps) {
  return (
    <S.ViewWrapper>
      <S.TextTitle>{title}</S.TextTitle>
      <S.TextSubTitle>{subTitle}</S.TextSubTitle>
    </S.ViewWrapper>
  )
}
