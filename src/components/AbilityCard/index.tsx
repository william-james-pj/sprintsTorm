import HeartSVG from 'src/assets/svg/heart-crack.svg'
import ShieldSVG from 'src/assets/svg/shield-halved.svg'

import * as S from './styles'

type Props = {
  type: 'weakness' | 'resistance'
  value: string
}

export function AbilityCard({ type, value }: Props) {
  return (
    <S.ViewWrapper>
      {type === 'weakness' ? <HeartSVG /> : <ShieldSVG />}
      <S.ViewTextContainer>
        <S.TextTitle>{type === 'weakness' ? 'Fraqueza' : 'Resistência'}</S.TextTitle>
        <S.TextText>{value}</S.TextText>
      </S.ViewTextContainer>
    </S.ViewWrapper>
  )
}
