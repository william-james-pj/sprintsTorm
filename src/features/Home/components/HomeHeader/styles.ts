import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  width: 100%;
  height: auto;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewTextContainer = styled.View`
  flex-direction: column;
  gap: 4px;
`

export const TextUserName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
`

export const TextMessage = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
`

export const ViewUserContainer = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
`
