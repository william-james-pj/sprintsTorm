import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 100%;
  height: auto;

  border-radius: 8px;

  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ViewColumn = styled.View`
  display: flex;
  flex-direction: column;
`

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
`

export const TextValue = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text600};
`
