import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  height: auto;
  padding: 0 16px;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
`

export const ViewContent = styled.View`
  min-height: 56px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ButtonWrapper = styled.View`
  height: 100%;
  left: 0px;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 9;
`

export const TextTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${fonts.type.text700};
  font-size: ${fonts.size.sm};
  color: ${({ theme }) => theme.colors.text};
`
