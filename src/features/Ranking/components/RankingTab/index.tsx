import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import * as S from './styles'

export function RankingTab() {
  const [tabActive, setTabActive] = useState<RankingTabType>('week')

  function changeTab(to: RankingTabType) {
    setTabActive(to)
  }

  return (
    <S.ViewWrapper>
      <RectButton style={styles.viewAllButton} onPress={() => changeTab('week')}>
        <S.Text isActive={tabActive === 'week'}>Semana</S.Text>
        <S.ViewLine isActive={tabActive === 'week'} />
      </RectButton>
      <RectButton style={styles.viewAllButton} onPress={() => changeTab('month')}>
        <S.Text isActive={tabActive === 'month'}>Mês</S.Text>
        <S.ViewLine isActive={tabActive === 'month'} />
      </RectButton>
      <RectButton style={styles.viewAllButton} onPress={() => changeTab('year')}>
        <S.Text isActive={tabActive === 'year'}>Ano</S.Text>
        <S.ViewLine isActive={tabActive === 'year'} />
      </RectButton>
    </S.ViewWrapper>
  )
}

const styles = StyleSheet.create({
  viewAllButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  }
})
