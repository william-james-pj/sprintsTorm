import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  width: 100%;
  height: auto;

  padding-right: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewBoxContainer = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: auto;

  padding: 8px 16px;

  flex-direction: row;
  align-items: center;
  gap: 24px;
`

export const TextUserName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
`

export const ViewTrophyContainer = styled.View`
  flex-direction: row;
  gap: -8px;
`

export const ViewTextTrophyContainer = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 2px 12px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`

export const TextTrophyNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
