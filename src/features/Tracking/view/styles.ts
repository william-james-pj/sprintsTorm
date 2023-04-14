import styled from 'styled-components/native'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  padding: 32px 24px;

  display: flex;
  justify-content: space-between;
  position: relative;

  gap: 16px;
`

export const ViewHeader = styled.View`
  flex: 1;

  gap: 16px;
`

export const ViewFooter = styled.View`
  width: 100%;
  height: auto;

  gap: 8px;
`

export const ViewButtonContainer = styled.View`
  width: 100%;
  height: 40px;

  display: flex;
  gap: 32px;
  flex-direction: row;
  justify-content: center;
`
