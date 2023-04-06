import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  width: 100%;
  height: auto;

  padding: 8px 16px 8px 8px;
  border-radius: 16px;
  overflow: hidden;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ViewRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const ViewCircleContainer = styled.View`
  background: ${(props) => props.theme.colors.text};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  overflow: hidden;
`

export const ViewTextContainer = styled.View`
  gap: 0px;
`

export const TextType = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`

export const TextDate = styled.Text`
  color: ${(props) => props.theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`

export const TextDistance = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
`
