import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex: 1
  border-radius: 8px;

  overflow: hidden;
`

export const ViewContainer = styled.View`
  flex: 1

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
`
