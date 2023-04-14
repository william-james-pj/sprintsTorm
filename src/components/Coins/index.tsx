import { useTheme } from 'styled-components'

import CoinsSVG from 'src/assets/svg/coins-solid.svg'

import * as S from './styles'

type CoinsProps = {
  coin: number
}

export function Coins({ coin }: CoinsProps) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <CoinsSVG fill={theme.colors.primary} />
      <S.TextNumber>{coin}</S.TextNumber>
    </S.ViewWrapper>
  )
}