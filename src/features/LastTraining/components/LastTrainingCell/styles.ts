import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;
  height: auto;

  padding: 8px 8px 8px 16px;
  border-radius: 8px;
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

export const ViewTextContainer = styled.View`
  gap: 0px;
`

export const TextType = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`

export const TextDate = styled.Text`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`

export const ViewAwardContainer = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 6px 8px;
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const TextDistance = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
