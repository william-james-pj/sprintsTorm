import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 6px;
`

export const TextNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
