import styled from 'styled-components/native'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.background};
  flex: 1;
  padding: 0px 24px 64px;

  display: flex;
`

export const ViewHeaderContainer = styled.View`
  width: 100%;
  gap: 32px;

  margin-top: 32px;
  margin-bottom: 16px;
`

export const Separator = styled.View`
  width: 100%;
  height: 0px;
`
