import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  flex: 1;

  padding: 16px 0 0;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ViewHeader = styled.View`
  width: 100%;

  padding: 0 16px;

  flex-direction: column;
  align-items: center;
  gap: 40px;
`

export const ViewBoss = styled.View`
  width: 100%;

  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const ViewFooter = styled.View`
  width: 100%;

  align-items: flex-end;
`

export const ViewCardsContainer = styled.View`
  background: ${({ theme }) => theme.colors.card};
  width: 90%;

  padding: 32px 16px;
  position: relative;
`

export const ViewCards = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  left: 16px;
  right: 0;
  bottom: 16px;
`

export const ViewLastDamage = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 4px 8px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
`

export const TextLastDamage = styled.Text`
  color: ${({ theme }) => theme.colors.life};
  font-size: 8px;
  font-family: ${fonts.type.text600};
  text-align: center;
`
