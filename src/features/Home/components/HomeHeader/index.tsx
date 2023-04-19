import { useTheme } from 'styled-components'

import TrophySVG from 'src/assets/svg/trophy.svg'

import * as S from './styles'

type Props = {
  userName: string
  trophy: number
}

export function HomeHeader({ userName, trophy }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <S.ViewBoxContainer style={{ borderTopEndRadius: 8, borderBottomEndRadius: 8 }}>
        <S.TextUserName>{userName}</S.TextUserName>

        <S.ViewTrophyContainer>
          <TrophySVG fill={theme.colors.primary} style={{ zIndex: 9, marginTop: 1 }} />
          <S.ViewTextTrophyContainer>
            <S.TextTrophyNumber>{trophy}</S.TextTrophyNumber>
          </S.ViewTextTrophyContainer>
        </S.ViewTrophyContainer>
      </S.ViewBoxContainer>
    </S.ViewWrapper>
  )
}
