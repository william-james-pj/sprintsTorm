import { useTheme } from 'styled-components'

import CoinsSVG from 'src/assets/svg/coins-solid.svg'

import * as S from './styles'

type Props = {
  coin: string
}

export function Coins({ coin }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <CoinsSVG fill={theme.colors.coin} />
      <S.TextNumber>{coin}</S.TextNumber>
    </S.ViewWrapper>
  )
}
