import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 32px 24px;

  display: flex;
  justify-content: space-between;
  position: relative;
`

export const ViewHeader = styled.View`
  width: 100%;
  height: auto;

  gap: 16px;
`

export const ViewMap = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex: 1;
  border-radius: 8px;

  overflow: hidden;
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
