import { useTheme } from 'styled-components'

import CardsSVG from 'src/assets/svg/cards.svg'
import HomeSVG from 'src/assets/svg/house-solid.svg'

import * as S from './styles'

interface IconTabBarProps {
  focused: boolean
  icon: 'Home' | 'Cards'
}

export function IconTabBar({ focused, icon }: IconTabBarProps) {
  const theme = useTheme()

  return (
    <S.Icon active={focused}>
      {icon === 'Home' ? (
        <HomeSVG fill={focused ? theme.colors.primary : theme.colors.disabled} />
      ) : (
        <CardsSVG fill={focused ? theme.colors.primary : theme.colors.disabled} />
      )}
    </S.Icon>
  )
}
