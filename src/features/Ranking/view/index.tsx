import { useRef } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { RankingTab } from '../components/RankingTab'
import { RankingCell } from 'src/features/Ranking/components/RankingCell'
import { RankingHeader } from 'src/features/Ranking/components/RankingHeader'

import * as S from './styles'

export function RankingScreen() {
  const flatList = useRef<FlatList<RankingType>>(null)

  const data: RankingType[] = [{ id: '1' }, { id: '2' }, { id: '3' }]

  const renderHeader = () => {
    return <RankingHeader />
  }

  const renderRows = ({ item }: { item: RankingType }) => {
    return <RankingCell />
  }

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewContainer>
          <S.TextTitle>Classificação</S.TextTitle>
          <RankingTab />
          <FlatList
            style={{ flex: 1 }}
            ref={flatList}
            showsVerticalScrollIndicator={false}
            bounces={false}
            data={data}
            renderItem={renderRows}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={() => <S.Separator></S.Separator>}
          />
        </S.ViewContainer>
      </SafeAreaView>
    </S.ViewWrapper>
  )
}
