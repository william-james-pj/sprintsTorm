import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: 35px;

  display: flex;
  flex-direction: column;
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
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
`
