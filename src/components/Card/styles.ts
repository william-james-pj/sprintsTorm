import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

type DisabledProps = {
  isDisabled: boolean
}

export const ViewWrapper = styled.View<DisabledProps>`
  background: ${({ theme }) => theme.colors.card};

  border-radius: 8px;
  border: 2px solid;
  border-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.disabled : theme.colors.primary};
`

export const ViewContent = styled.View`
  background: rgba(217, 217, 217, 1);
  flex: 1;

  border-radius: 4px;
  position: relative;
  overflow: hidden;
`

export const ViewNameContainer = styled.View<DisabledProps>`
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.disabled : theme.colors.primary};
  width: 100%;

  padding: 2px 0px;

  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  bottom: 0;
`

export const TextName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewQtdContainer = styled.View<DisabledProps>`
  background: ${({ theme, isDisabled }) =>
    isDisabled ? theme.colors.disabled : theme.colors.primary};

  padding: 2px 6px;

  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
`

export const TextQtd = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
  text-align: center;
`
