import { useTheme } from 'styled-components'

import CoinsSVG from 'src/assets/svg/coins-solid.svg'
import StarSVG from 'src/assets/svg/star-solid.svg'
import { useStatus } from 'src/hooks/useStatus'

import * as S from './styles'

type Props = object

export function UserStatus({}: Props) {
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
