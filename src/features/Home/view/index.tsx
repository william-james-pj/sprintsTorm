import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'

import BackgroundImg from 'src/assets/img/background.png'
import SwordsSVG from 'src/assets/svg/swords.svg'
import { UserStatus } from 'src/components/UserStatus'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { HomeHeader } from 'src/features/Home/components/HomeHeader'
import { HomeSection } from 'src/features/Home/components/HomeSection'
import { LastTrainingCell } from 'src/features/LastTraining/components/LastTrainingCell'

import * as S from './styles'

export function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>()
  const theme = useTheme()

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <S.ViewHeader>
            <UserStatus />

            <HomeHeader userName="UserName" trophy={0} />
          </S.ViewHeader>

          <S.ViewContent>
            <HomeSection title="Desafios"></HomeSection>

            <HomeSection
              title="Último treino"
              buttonText="Ver tudo"
              buttonTextOnPress={() => navigation.navigate('LastTraining')}
            >
              <LastTrainingCell />
            </HomeSection>
          </S.ViewContent>

          <S.ViewBattleButton>
            <TouchableOpacity onPress={() => {}} style={{ flex: 1 }}>
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
