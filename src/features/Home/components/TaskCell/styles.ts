import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;

  padding: 6px 12px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};

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
