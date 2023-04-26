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
import { useAuth } from 'src/hooks/useAuth'
import { useBattle } from 'src/hooks/useBattle'
import { useEnemies } from 'src/hooks/useEnemies'
import { useStatus } from 'src/hooks/useStatus'

import * as S from './styles'

export function BattleLevelMap() {
  const navigation = useNavigation<HomeNavigationProp>()
  const theme = useTheme()
  const flatList = useRef<FlatList<EnemiesProps>>(null)

  const { user } = useAuth()
  const { status } = useStatus()
  const { enemies } = useEnemies()
  const { selectEnemy } = useBattle()

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [indexSelected, setIndexSelected] = useState(0)

  const toggleModal = () => setIsModalVisible(!isModalVisible)
  const changeIndex = (index: number) => setIndexSelected(index)

  const renderRows = ({ item }: { item: EnemiesProps }) => {
    return (
      <BattleLevelCell
        isLeveBefore={item.level < (status?.currentLevel ?? 0)}
        isLeveAfter={item.level > (status?.currentLevel ?? 1)}
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

  const onSelect = async () => {
    if (!user || !status) return
    await selectEnemy(enemies[indexSelected], user.id, status.round)
    navigation.navigate('Battle')
    toggleModal()
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
        <BossModal item={enemies[indexSelected]} onPress={onSelect} />
      </Modal>
    </>
  )
}
