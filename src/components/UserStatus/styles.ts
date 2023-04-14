import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  width: 100%;
  height: auto;

  padding: 0 16px;

  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`

export const ViewXPContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: -10px;
`

export const ViewStarContainer = styled.View`
  width: auto;
  z-index: 9;
  position: relative;
`

export const ViewStarTextContainer = styled.View`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;

  justify-content: center;
  align-self: center;
`

export const TextLevelNumber = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewXP = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 4px 32px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const TextXPNumber = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`

export const ViewCoin = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 4px 16px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

export const TextCoinNumber = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
