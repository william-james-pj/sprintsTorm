import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

export const Wrapper = styled.View`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  min-width: 90%;
  height: 47px;
  border-radius: 8px;
  overflow: hidden;
`

export const ButtonWrapper = styled.View`
  height: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;

  margin-left: 16px;
`

export const Indicator = styled(ActivityIndicator).attrs((props) => ({
  color: props.theme.colors.primary
}))``
