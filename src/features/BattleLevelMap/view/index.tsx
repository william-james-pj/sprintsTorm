import { useNavigation } from '@react-navigation/native'
import { useRef, useState } from 'react'
import { FlatList, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

import BackgroundImg from 'src/assets/img/background.png'
import HouseSVG from 'src/assets/svg/house-solid.svg'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { BattleLevelCell } from 'src/features/BattleLevelMap/components/BattleLevelCell'
import { BossModal } from 'src/features/BattleLevelMap/components/BossModal'
import { useEnemies } from 'src/hooks/useEnemies'
import { useRewards } from 'src/hooks/useRewards'

import * as S from './styles'

export function BattleLevelMap() {
  const navigation = useNavigation<HomeNavigationProp>()
  const theme = useTheme()
  const flatList = useRef<FlatList<EnemiesProps>>(null)

  const { rewards } = useRewards()
  const { enemies } = useEnemies()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [indexSelected, setIndexSelected] = useState(0)

  const toggleModal = () => setIsModalVisible(!isModalVisible)
  const changeIndex = (index: number) => setIndexSelected(index)

  const renderRows = ({ item }: { item: EnemiesProps }) => {
    return (
      <BattleLevelCell
        isLeveBefore={item.level < (rewards?.currentLevel ?? 0)}
        isLeveAfter={item.level > (rewards?.currentLevel ?? 1)}
        item={item}
        onPress={() => {
          toggleModal()
          changeIndex(item.level - 1)
        }}
      />
    )
  }

  const renderHeader = () => {
    return (
      <S.Header>
        <S.ViewLevel></S.ViewLevel>
      </S.Header>
    )
  }

  return (
    <>
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
              data={enemies}
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
      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={toggleModal}
        onBackdropPress={toggleModal}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        statusBarTranslucent
        style={{ margin: 0, justifyContent: 'flex-end' }}
      >
        <BossModal
          item={enemies[indexSelected]}
          onPress={() => {
            navigation.navigate('Battle')
            toggleModal()
          }}
        />
      </Modal>
    </>
  )
}
