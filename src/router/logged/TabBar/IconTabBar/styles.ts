import Svg from 'react-native-svg'
import styled from 'styled-components/native'

interface IconProps {
  active: boolean
}

export const Icon = styled.View<IconProps>`
  position: absolute;
  top: 30%;
  left: 40%;
`

export const SvgStyle = styled(Svg)``
