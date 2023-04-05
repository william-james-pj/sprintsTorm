import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const ViewWrapper = styled.View`
  background: ${(props) => props.theme.colors.card};
  flex: 1;
  border-radius: 8px;

  overflow: hidden;
`
