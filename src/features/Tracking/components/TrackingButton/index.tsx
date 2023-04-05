import { TouchableOpacity } from 'react-native'

import * as S from './styles'

type TrackingButtonProps = {
  title: string
  onPress: () => void
}

export function TrackingButton({ title, onPress }: TrackingButtonProps) {
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
