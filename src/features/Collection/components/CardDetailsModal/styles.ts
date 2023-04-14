import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;

  padding: 16px;
  border-radius: 16px;

  flex-direction: column;
  gap: 24px;
`

export const ViewDetails = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const ViewTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const TextName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const TextDescription = styled.Text`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  text-align: center;
`

export const ViewAbility = styled.View`
  width: 100%;

  flex-direction: row;
  gap: 8px;
`

export const ViewButton = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;

  border-radius: 4px;
  overflow: hidden;
`

export const ViewButtonContent = styled.View`
  width: 100%;

  padding: 8px 0;
  justify-content: center;
  align-items: center;
`
