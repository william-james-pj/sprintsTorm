import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: auto;

  padding: 24px 16px;
  gap: 32px;
`

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewButtonContainer = styled.View`
  width: 100%;
  height: 40px;

  display: flex;
  gap: 32px;
  flex-direction: row;
  justify-content: center;
`
