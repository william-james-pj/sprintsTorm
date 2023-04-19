import { useTheme } from 'styled-components'

import StarSVG from 'src/assets/svg/star-small.svg'

import * as S from './styles'

type Props = {
  experience: string
}

export function Experience({ experience }: Props) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <StarSVG fill={theme.colors.exp} />
      <S.TextNumber>{experience}</S.TextNumber>
    </S.ViewWrapper>
  )
}
