import HandSVG from 'src/assets/svg/hand-fist-solid.svg'
import HeartSVG from 'src/assets/svg/heart-crack.svg'
import ShieldSVG from 'src/assets/svg/shield-halved.svg'

import * as S from './styles'

type Props = {
  type: 'weakness' | 'resistance' | 'damage'
  value: string
}

export function AbilityCard({ type, value }: Props) {
  return (
    <S.ViewWrapper>
      {type === 'weakness' ? <HeartSVG /> : type === 'resistance' ? <ShieldSVG /> : <HandSVG />}
      <S.ViewTextContainer>
        <S.TextTitle>
          {type === 'weakness' ? 'Fraqueza' : type === 'resistance' ? 'Resistência' : 'Dano base'}
        </S.TextTitle>
        <S.TextText>{value}</S.TextText>
      </S.ViewTextContainer>
    </S.ViewWrapper>
  )
}
