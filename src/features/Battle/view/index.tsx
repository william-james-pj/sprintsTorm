import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundImg from 'src/assets/img/background.png'
import { Card } from 'src/components/Card'
import { HomeNavigationProp } from 'src/constants/navigationTypes'
import { BattleHeader } from 'src/features/Battle/components/BattleHeader'
import { LifeBar } from 'src/features/Battle/components/LifeBar'
import { useBattle } from 'src/hooks/useBattle'
import { useDebounce } from 'src/hooks/useDebounce'
import { useWarriors } from 'src/hooks/useWarriors'

import * as S from './styles'

export function BattleScreen() {
  const navigation = useNavigation<HomeNavigationProp>()

  const { warriors, userArmy, updateUserArmy } = useWarriors()
  const { enemy, totalLife, currentLife, handleBattle, lastDamage } = useBattle()

  const selectWarrior = (warrior: WarriorsProps) => {
    handleBattle(warrior)
    debouncedRequest()
  }

  const debouncedRequest = useDebounce(() => {
    updateUserArmy()
  })

  return (
    <ImageBackground style={{ flex: 1 }} source={BackgroundImg}>
      <SafeAreaView style={{ flex: 1 }}>
        <S.ViewWrapper>
          <S.ViewHeader>
            <BattleHeader title={`Level ${enemy?.level}`} onClose={() => navigation.goBack()} />

            <S.ViewBoss>
              <Card width={140} hideQtd qtd={1} enemy={enemy ?? undefined} />

              <LifeBar currentLife={currentLife} life={totalLife} />

              {lastDamage && (
                <S.ViewLastDamage>
                  <S.TextLastDamage>{`-${lastDamage}`}</S.TextLastDamage>
                </S.ViewLastDamage>
              )}
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
                    onPress={() => selectWarrior(warrior)}
                    canBeDisabled
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
