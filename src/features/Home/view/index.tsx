import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

import BackgroundImg from 'src/assets/img/background.png'
import SwordsSVG from 'src/assets/svg/swords.svg'
import { Section } from 'src/components/Section'
import { UserStatus } from 'src/components/UserStatus'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { HomeHeader } from 'src/features/Home/components/HomeHeader'
import { LastTrainingCell } from 'src/features/LastTraining/components/LastTrainingCell'
import { useAuth } from 'src/hooks/useAuth'
import { useEnemies } from 'src/hooks/useEnemies'
import { useStatus } from 'src/hooks/useStatus'
import { useWarriors } from 'src/hooks/useWarriors'
import { splitName } from 'src/utils/splitName'

import * as S from './styles'

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>()
  const theme = useTheme()

  const { user } = useAuth()
  const { getStatus } = useStatus()
  const { getEnemies } = useEnemies()
  const { getWarriors, getUserWarriors } = useWarriors()

  useEffect(() => {
    Promise.all([getStatus(), getEnemies(), getWarriors(), getUserWarriors()])
    console.log('HomeScreen')
    return () => {}
  }, [])

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <S.ViewHeader>
            <UserStatus />

            <HomeHeader userName={splitName(user?.name)} trophy={0} />
          </S.ViewHeader>

          <S.ViewContent>
            <Section title="Desafios"></Section>

            <Section
              title="Último treino"
              buttonText="Ver tudo"
              buttonTextOnPress={() => navigation.navigate('LastTraining')}
            >
              <LastTrainingCell />
            </Section>
          </S.ViewContent>

          <S.ViewBattleButton>
            <TouchableOpacity
              onPress={() => navigation.navigate('BattleLevelMap')}
              style={{ flex: 1 }}
            >
              <S.ViewBattleButtonContent>
                <SwordsSVG fill={theme.colors.primary} />
                <S.TextBattleButton>Batalhar</S.TextBattleButton>
              </S.ViewBattleButtonContent>
            </TouchableOpacity>
          </S.ViewBattleButton>
        </S.ViewWrapper>
      </SafeAreaView>
    </ImageBackground>
  )
}
