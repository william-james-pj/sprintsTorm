import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const Wrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 100%;
  height: 50px;

  border-radius: 8px;
  overflow: hidden;
`

export const Button = styled.View`
  height: 100%;

  align-items: center;
  justify-content: center;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text700};
  text-transform: uppercase;
`

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.primary
}))``
