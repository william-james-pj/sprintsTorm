import HeartSVG from 'src/assets/svg/heart-crack.svg'
import ShieldSVG from 'src/assets/svg/shield-halved.svg'

import * as S from './styles'

type AbilityCardProps = {
  type: 'weakness' | 'resistance'
}

export function AbilityCard({ type }: AbilityCardProps) {
  return (
    <S.ViewWrapper>
      {type === 'weakness' ? <HeartSVG /> : <ShieldSVG />}
      <S.ViewTextContainer>
        <S.TextTitle>{type === 'weakness' ? 'Fraqueza' : 'Resistência'}</S.TextTitle>
        <S.TextText>SomoWeakness</S.TextText>
      </S.ViewTextContainer>
    </S.ViewWrapper>
  )
}
