import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

type StyleProps = {
  isCenter: boolean
}

export const ViewBox = styled.View<StyleProps>`
  background: ${(props) => props.theme.colors.card};
  padding: 16px 0px;
  flex: ${({ isCenter }) => (isCenter ? '1.2' : '0.9')};

  gap: 6px;
`

export const ViewColumn = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;

  gap: 4px;
`

export const TextNumber = styled.Text<StyleProps>`
  color: ${({ isCenter, theme }) => (isCenter ? theme.colors.primary : theme.colors.text)};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
`

export const ViewCircleContainer = styled.View<StyleProps>`
  background: ${({ theme }) => theme.colors.disabled};
  width: ${({ isCenter }) => (isCenter ? '36px' : '30px')};
  height: ${({ isCenter }) => (isCenter ? '36px' : '30px')};
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: ${({ isCenter }) => (isCenter ? '2px' : '0px')};
  border-radius: 18px;
  overflow: hidden;
`

export const TextName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text400};
  text-align: center;
`

export const TextDistance = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  text-align: center;
`
