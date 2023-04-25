import { useTheme } from 'styled-components'

import CoinsSVG from 'src/assets/svg/coins-solid.svg'
import { useStatus } from 'src/hooks/useStatus'

import * as S from './styles'

export function UserStatus() {
  const theme = useTheme()

  const { status } = useStatus()

  return (
    <S.ViewWrapper>
      <S.ViewCoin>
        <S.TextCoinNumber>{status?.coins}</S.TextCoinNumber>
        <CoinsSVG fill={theme.colors.primary} />
      </S.ViewCoin>
    </S.ViewWrapper>
  )
}
