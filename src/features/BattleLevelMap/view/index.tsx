import { useNavigation } from '@react-navigation/native'
import { useRef } from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

import BackgroundImg from 'src/assets/img/background.png'
import HouseSVG from 'src/assets/svg/house-solid.svg'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { BattleLevelCell } from 'src/features/BattleLevelMap/components/BattleLevelCell'

import * as S from './styles'

export function BattleLevelMap() {
  const navigation = useNavigation<HomeNavigationProp>()
  const theme = useTheme()
  const flatList = useRef<FlatList<BossType>>(null)

  const data: BossType[] = [
    { id: '1', level: 1 },
    { id: '2', level: 2 },
    { id: '3', level: 3 },
    { id: '4', level: 4 },
    { id: '5', level: 5 },
    { id: '6', level: 6 }
  ]

  const renderRows = ({ item }: { item: BossType }) => {
    return <BattleLevelCell item={item} />
  }

  const renderHeader = () => {
    return (
      <S.Header>
        <S.ViewLevel></S.ViewLevel>
      </S.Header>
    )
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <FlatList
            inverted
            style={{ flex: 1, paddingTop: 0 }}
            ref={flatList}
            showsVerticalScrollIndicator={false}
            bounces={false}
            removeClippedSubviews={false}
            data={data}
            renderItem={renderRows}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <S.Separator></S.Separator>}
            ListFooterComponent={() => <S.Footer />}
            ListHeaderComponent={renderHeader}
          />

          <S.ViewBattleButton>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ flex: 1 }}>
              <S.ViewBattleButtonContent>
                <HouseSVG fill={theme.colors.primary} />
              </S.ViewBattleButtonContent>
            </TouchableOpacity>
          </S.ViewBattleButton>
        </S.ViewWrapper>
      </SafeAreaView>
    </ImageBackground>
  )
}
