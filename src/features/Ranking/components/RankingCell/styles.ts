import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 100%;
  height: auto;

  padding: 8px 16px;
  overflow: hidden;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const TextPosition = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
`

export const ViewCircleContainer = styled.View`
  background: ${(props) => props.theme.colors.disabled};
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

export const TextDistance = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
`
