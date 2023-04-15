import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 100%;

  padding: 16px;
  border-radius: 16px;

  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const ViewTextContainer = styled.View`
  width: 100%;

  flex-direction: column;
  gap: 8px;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const TextSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  text-align: center;
`

export const ViewContent = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 16px;
`

export const ViewRewardContainer = styled.View`
  flex-direction: column;
  gap: 8px;
`

export const ViewReward = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 6px 16px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
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

export const TextButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
