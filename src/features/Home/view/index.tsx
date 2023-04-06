import { useRef } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FriendCell } from 'src/features/Home/components/FriendCell'
import { HomeHeader } from 'src/features/Home/components/HomeHeader'
import { HomeSection } from 'src/features/Home/components/HomeSection'
import { LastTrainingCell } from 'src/features/LastTraining/components/LastTrainingCell'

import * as S from './styles'

export function HomeScreen() {
  const flatList = useRef<FlatList<FriendType>>(null)

  const data: FriendType[] = [{ id: '1' }, { id: '2' }, { id: '3' }]

  const renderRows = ({ item }: { item: FriendType }) => {
    return <FriendCell />
  }

  const renderHeader = () => {
    return (
      <S.ViewHeaderContainer>
        <HomeHeader userName="UserName" />

        <HomeSection title="Desafios"></HomeSection>

        <HomeSection title="Duelo" buttonText="Iniciar duelo"></HomeSection>

        <HomeSection title="Último treino" buttonText="Ver tudo">
          <LastTrainingCell />
        </HomeSection>

        <HomeSection title="Amigos" buttonText="Adicionar"></HomeSection>
      </S.ViewHeaderContainer>
    )
  }

  return (
    <S.ViewWrapper>
      <SafeAreaView style={{ flex: 1 }}>
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
      </SafeAreaView>
    </S.ViewWrapper>
  )
}
