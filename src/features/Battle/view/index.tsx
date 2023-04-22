import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { BattleHeader } from 'src/features/Battle/components/BattleHeader'
import { LifeBar } from 'src/features/Battle/components/LifeBar'
import { useWarriors } from 'src/hooks/useWarriors'

import * as S from './styles'

export function BattleScreen() {
  const navigation = useNavigation<HomeNavigationProp>()

  const { warriors, userArmy } = useWarriors()

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <S.ViewHeader>
            <BattleHeader title="Level 1" onClose={() => navigation.goBack()} />

            <S.ViewBoss>
              <Card width={140} hideQtd />

              <LifeBar />
            </S.ViewBoss>
          </S.ViewHeader>

          <S.ViewFooter>
            <S.ViewCardsContainer style={{ borderTopStartRadius: 16 }}>
              <S.ViewCards>
                {warriors.map((warrior) => (
                  <Card
                    width={80}
                    key={warrior.id}
                    item={warrior}
                    qtd={userArmy ? userArmy[warrior.ability] : 0}
                  />
                ))}
              </S.ViewCards>
            </S.ViewCardsContainer>
          </S.ViewFooter>
        </S.ViewWrapper>
      </SafeAreaView>
    </ImageBackground>
  )
}
