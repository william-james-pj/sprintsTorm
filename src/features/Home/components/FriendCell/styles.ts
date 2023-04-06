import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  padding: 8px 0px;

  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const ViewUserContainer = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
`

export const TextName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
`
