import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  width: 100%;
  height: 105px;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
  margin-bottom: 8px;
`

export const TextSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  text-align: center;
`
