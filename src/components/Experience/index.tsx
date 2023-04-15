import { useTheme } from 'styled-components'

import StarSVG from 'src/assets/svg/star-small.svg'

import * as S from './styles'

type ExperienceProps = {
  experience: string
}

export function Experience({ experience }: ExperienceProps) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <StarSVG fill={theme.colors.exp} />
      <S.TextNumber>{experience}</S.TextNumber>
    </S.ViewWrapper>
  )
}
