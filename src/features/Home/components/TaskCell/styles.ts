import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;

  padding: 6px 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text700};

  flex: 1;
`

export const ViewReward = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const TextReward = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 8px;
  font-family: ${fonts.type.text600};
`
