import { StyleSheet } from 'react-native'

import * as S from './styles'

type RankingHeaderCellProps = {
  position: 'left' | 'center' | 'right'
}

export function RankingHeaderCell({ position }: RankingHeaderCellProps) {
  return (
    <S.ViewBox
      isCenter={position === 'center'}
      style={
        position === 'left' ? styles.left : position === 'center' ? styles.center : styles.right
      }
    >
      <S.ViewColumn>
        <S.TextNumber isCenter={position === 'center'}>2</S.TextNumber>
        <S.ViewCircleContainer isCenter={position === 'center'}></S.ViewCircleContainer>
      </S.ViewColumn>
      <S.ViewColumn>
        <S.TextName>UserName</S.TextName>
        <S.TextDistance>380km</S.TextDistance>
      </S.ViewColumn>
    </S.ViewBox>
  )
}

const styles = StyleSheet.create({
  left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: '90%'
  },
  center: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  right: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    height: '90%'
  }
})
