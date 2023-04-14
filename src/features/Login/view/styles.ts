import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;

  padding: 32px 24px;
`

export const ViewContainer = styled.View`
  flex: 1;

  flex-direction: column;
  justify-content: space-between;
`

export const TextAppName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewFooter = styled.View`
  justify-content: flex-end;
  gap: 54px;
`

export const ImageWrapper = styled.View`
  width: 95%;
  justify-content: center;
  align-items: center;
`

export const ViewTextGap = styled.View`
  gap: 8px;
`

export const TextSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.normal};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${fonts.size.xl};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewButtonGap = styled.View`
  gap: 16px;
`

export const TextMessage = styled.Text`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text400};
  text-align: center;
`
