import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 128px;

  padding: 4px 0;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  justify-content: center;
  align-items: center;
`

export const ViewLife = styled.View`
  background: ${({ theme }) => theme.colors.life};

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`

export const TextLife = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 8px;
  font-family: ${fonts.type.text600};
  z-index: 9;
`
