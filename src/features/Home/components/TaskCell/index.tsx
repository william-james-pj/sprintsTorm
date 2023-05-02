import { Coins } from 'src/components/Coins'

import * as S from './styles'

type Pros = {
  item: DailyTaskProps | MonthlyTaskProps
}

export function TaskCell({ item }: Pros) {
  return (
    <S.ViewWrapper>
      <S.TextTitle>{item.task}</S.TextTitle>

      <S.ViewReward>
        <S.TextReward>Recompensa</S.TextReward>
        <Coins coin={`${item.reward}`} />
      </S.ViewReward>
    </S.ViewWrapper>
  )
}
