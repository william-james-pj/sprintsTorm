import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
`

export const ViewContainer = styled.View`
  flex: 1;
  padding: 32px 24px;

  gap: 32px;
`

export const TextTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const Separator = styled.View`
  width: 100%;
  height: 4px;
`
