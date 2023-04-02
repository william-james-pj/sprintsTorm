import * as S from './styles'

type TimeBoxProps = {
  distance: number
}

export function TimeBox({ distance }: TimeBoxProps) {
  return (
    <S.ViewWrapper>
      <S.ViewColumn>
        <S.TextTitle>Tempo</S.TextTitle>
        <S.TextValue>01:42:00</S.TextValue>
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
