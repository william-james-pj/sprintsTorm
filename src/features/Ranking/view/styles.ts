import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  display: flex;
  padding: 32px 24px;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
  margin-bottom: 8px;
`
