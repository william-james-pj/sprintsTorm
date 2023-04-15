import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  flex: 1;
`

export const TextAppName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const Separator = styled.View`
  width: 100%;
`

export const Footer = styled.View`
  width: 100%;
  height: 10px;
`

export const Header = styled.View`
  width: 100%;
  height: 40px;
`

export const ViewLevel = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  width: 20px;
  height: 100%;
`

export const ViewBattleButton = styled.View`
  background: ${({ theme }) => theme.colors.background};

  border-radius: 8px;
  overflow: hidden;

  position: absolute;
  right: 16px;
  bottom: 16px;
`

export const ViewBattleButtonContent = styled.View`
  padding: 12px;

  justify-content: center;
  align-items: center;
`
