import { useTheme } from 'styled-components'

import CoinsSVG from 'src/assets/svg/coins-solid.svg'
import StarSVG from 'src/assets/svg/star-solid.svg'

import * as S from './styles'

type Props = {
  xp: number
  coins: number
}

export function UserStatus({ xp, coins }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <S.ViewXPContainer>
        <S.ViewStarContainer>
          <StarSVG />

          <S.ViewStarTextContainer>
            <S.TextLevelNumber>{xp}</S.TextLevelNumber>
          </S.ViewStarTextContainer>
        </S.ViewStarContainer>
        <S.ViewXP>
          <S.TextXPNumber>16/20</S.TextXPNumber>
        </S.ViewXP>
      </S.ViewXPContainer>

      <S.ViewCoin>
        <S.TextCoinNumber>{coins}</S.TextCoinNumber>
        <CoinsSVG fill={theme.colors.primary} />
      </S.ViewCoin>
    </S.ViewWrapper>
  )
}
