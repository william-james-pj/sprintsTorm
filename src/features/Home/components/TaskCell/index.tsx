import { useTheme } from 'styled-components'

import CheckSVG from 'src/assets/svg/check.svg'
import { Coins } from 'src/components/Coins'

import * as S from './styles'

type Pros = {
  item: DailyTaskProps | WeeklyTaskProps | MonthlyTaskProps
}

export function TaskCell({ item }: Pros) {
  const theme = useTheme()

  return (
    <S.ViewWrapper>
      <CheckSVG fill={item.isCompleted ? theme.colors.primary : theme.colors.disabled} />

      <S.TextTitle>{item.task}</S.TextTitle>

      <S.ViewReward>
        <S.TextReward>Recompensa</S.TextReward>
        <Coins coin={`${item.reward}`} />
      </S.ViewReward>
    </S.ViewWrapper>
  )
}
