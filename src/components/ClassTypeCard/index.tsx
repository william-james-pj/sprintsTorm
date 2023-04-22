import BowSVG from 'src/assets/svg/bow-arrow.svg'
import StaffSVG from 'src/assets/svg/staff.svg'
import SwordSVG from 'src/assets/svg/sword.svg'

import * as S from './styles'

type Props = {
  type: WarriorsTypeProps
}

export function ClassTypeCard({ type }: Props) {
  return (
    <S.ViewWrapper>
      {type === 'warrior' ? <SwordSVG /> : type === 'mage' ? <StaffSVG /> : <BowSVG />}
      <S.ViewTextContainer>
        <S.TextTitle>Classe</S.TextTitle>
        <S.TextText>
          {type === 'warrior' ? 'Guerreiro' : type === 'mage' ? 'Mago' : 'Arqueiro'}
        </S.TextText>
      </S.ViewTextContainer>
    </S.ViewWrapper>
  )
}
