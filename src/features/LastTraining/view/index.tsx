import { useRef } from 'react'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { EmptyList } from 'src/components/EmptyList'
import { NavBar } from 'src/components/NavBar'
import { LastTrainingCell } from 'src/features/LastTraining/components/LastTrainingCell'

import * as S from './styles'

export function LastTraining() {
  const flatList = useRef<FlatList<LastTrainingType>>(null)

  const data: LastTrainingType[] = [{ id: '1' }, { id: '2' }, { id: '3' }]

  const renderRows = ({ item }: { item: LastTrainingType }) => {
    return <LastTrainingCell />
  }

  return (
    <>
      <NavBar title={'Meus treinos'} />
      <S.ViewWrapper>
        <SafeAreaView style={{ flex: 1 }}>
          {data.length > 0 ? (
            <FlatList
              style={{ flex: 1, paddingTop: 16 }}
              ref={flatList}
              showsVerticalScrollIndicator={false}
              bounces={false}
              data={data}
              renderItem={renderRows}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={() => <S.Separator></S.Separator>}
              ListFooterComponent={() => <S.Footer />}
            />
          ) : (
            <EmptyList
              title="Nenhum treino registrado."
              subTitle="Comece a registrar suas corridas e veja seu progresso ao longo do tempo."
            />
          )}
        </SafeAreaView>
      </S.ViewWrapper>
    </>
  )
}