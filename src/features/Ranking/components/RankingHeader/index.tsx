import { RankingHeaderCell } from 'src/features/Ranking/components/RankingHeaderCell'

import * as S from './styles'

export function RankingHeader() {
  return (
    <S.ViewWrapper>
      <RankingHeaderCell position="left" />
      <RankingHeaderCell position="center" />
      <RankingHeaderCell position="right" />
    </S.ViewWrapper>
  )
}
