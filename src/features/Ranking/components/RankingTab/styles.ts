import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

type ComponentProps = {
  isActive: boolean
}

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;
  height: auto;

  border-radius: 8px;

  position: relative;
  overflow: hidden;
  flex-direction: row;
  gap: 8px;
`

export const ViewLine = styled.View<ComponentProps>`
  background: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.card)};
  width: 80%;
  height: 2px;

  position: absolute;
  bottom: 0;
  margin-left: 0;
  margin-right: 0;
`

export const Text = styled.Text<ComponentProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.disabled)};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
`
