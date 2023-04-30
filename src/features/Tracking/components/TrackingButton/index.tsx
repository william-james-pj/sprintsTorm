import { TouchableOpacity } from 'react-native'

import * as S from './styles'

type Props = {
  title: string
  isBackground?: boolean
  onPress: () => void
}

export function TrackingButton({ title, isBackground = false, onPress }: Props) {
  return (
    <S.ViewWrapper isBackground={isBackground}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
        <S.ViewContainer>
          <S.Text>{title}</S.Text>
        </S.ViewContainer>
      </TouchableOpacity>
    </S.ViewWrapper>
  )
}
