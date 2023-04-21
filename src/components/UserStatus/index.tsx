import { useTheme } from 'styled-components'

import CoinsSVG from 'src/assets/svg/coins-solid.svg'
import StarSVG from 'src/assets/svg/star-solid.svg'

import * as S from './styles'

type Props = {
  coins: number
}

export function UserStatus({ coins }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <S.ViewCoin>
        <S.TextCoinNumber>{coins}</S.TextCoinNumber>
        <CoinsSVG fill={theme.colors.primary} />
      </S.ViewCoin>
    </S.ViewWrapper>
  )
}
