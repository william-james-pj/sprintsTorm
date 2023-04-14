import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  flex: 1;

  padding: 24px 0px 64px;

  gap: 32px;
`

export const ViewHeader = styled.View`
  gap: 8px;
`

export const ViewContent = styled.View`
  flex: 1;

  padding: 0px 16px;

  gap: 32px;
`

export const ViewBattleButton = styled.View`
  background: ${({ theme }) => theme.colors.background};

  border-radius: 8px;
  overflow: hidden;

  position: absolute;
  right: 16px;
  bottom: 80px;
`

export const ViewBattleButtonContent = styled.View`
  padding: 12px 16px;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const TextBattleButton = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
  text-align: center;
`
