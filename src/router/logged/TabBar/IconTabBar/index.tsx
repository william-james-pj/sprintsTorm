import { useTheme } from 'styled-components'

import HouseLightSVG from 'src/assets/svg/house-light.svg'
import HomeSVG from 'src/assets/svg/house-solid.svg'
import RankingLightSVG from 'src/assets/svg/ranking-star-light.svg'
import RankingSVG from 'src/assets/svg/ranking-star-solid.svg'

import * as S from './styles'

interface IconTabBarProps {
  focused: boolean
  icon: 'Home' | 'Ranking'
}

export function IconTabBar({ focused, icon }: IconTabBarProps) {
  const theme = useTheme()

  return (
    <S.Icon active={focused}>
      {icon === 'Home' ? (
        focused ? (
          <HomeSVG fill={theme.colors.primary} />
        ) : (
          <HouseLightSVG fill={theme.colors.disabled} />
        )
      ) : focused ? (
        <RankingSVG fill={theme.colors.primary} />
      ) : (
        <RankingLightSVG fill={theme.colors.disabled} />
      )}
    </S.Icon>
  )
}
