import { TouchableOpacity } from 'react-native'

import * as S from './styles'

type Props = {
  title: string
  onPress: () => void
}

export function TrackingButton({ title, onPress }: Props) {
  return (
    <S.ViewWrapper>
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
        <S.ViewContainer>
          <S.Text>{title}</S.Text>
        </S.ViewContainer>
      </TouchableOpacity>
    </S.ViewWrapper>
  )
}
