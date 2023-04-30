import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  flex: 1;

  padding: 32px 24px;
`

export const ViewContainer = styled.View`
  flex: 1;
  min-height: 100%;

  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
`

export const TextAppName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewContentWrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;

  padding: 16px;
  border-radius: 8px;

  gap: 16px;
`

export const ViewFooter = styled.View`
  justify-content: flex-end;
  gap: 54px;
`

export const ViewButtonGap = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: center;
  gap: 8px;
`

export const TextMessage = styled.Text`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  text-align: center;
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  text-align: center;
`
