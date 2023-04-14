import styled from 'styled-components/native'

export const ViewWrapper = styled.View`
  background: ${({ theme }) => theme.colors.card};
  flex: 1;
  border-radius: 8px;

  overflow: hidden;
`
