import * as S from './styles'

type Props = {
  distance: number
  time: string
}

export function TimeBox({ distance, time }: Props) {
  return (
    <S.ViewWrapper>
      <S.ViewColumn>
        <S.TextTitle>Tempo</S.TextTitle>
        <S.TextValue>{time}</S.TextValue>
      </S.ViewColumn>
      <S.ViewColumn style={{ alignItems: 'flex-end' }}>
        <S.TextTitle style={{ textAlign: 'right' }}>Distância</S.TextTitle>
        <S.TextValue style={{ textAlign: 'right' }}>
          {`${Math.round(distance * 100) / 100} km`}
        </S.TextValue>
      </S.ViewColumn>
    </S.ViewWrapper>
  )
}
