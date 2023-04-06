import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  width: 100%;
  gap: 16px;
`

export const ViewHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
`

export const TextButton = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`
