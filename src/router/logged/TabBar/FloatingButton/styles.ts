import Svg from 'react-native-svg'
import styled from 'styled-components/native'

export const View = styled.View`
  position: relative;
  width: 75px;
  align-items: center;
`

export const SvgStyle = styled(Svg)`
  position: absolute;
  top: 0;
`

export const TouchableOpacity = styled.TouchableOpacity``

export const ActionButtonView = styled.View`
  width: 50px;
  height: 50px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  color: #fff;
  top: -20px;
`

export const Buttons = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: ${(props) => props.theme.colors.primary};
`
