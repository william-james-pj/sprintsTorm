import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.primary
}))``
