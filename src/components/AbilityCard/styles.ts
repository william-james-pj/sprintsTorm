import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;

  padding: 6px 8px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const ViewTextContainer = styled.View`
  flex-direction: column;
  gap: 0px;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 8px;
  font-family: ${fonts.type.text400};
`

export const TextText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
