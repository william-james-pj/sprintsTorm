import { TouchableOpacity } from 'react-native'

import * as S from './styles'

type Props = {
  title: string
  isBackground?: boolean
  isDisabled?: boolean
  onPress: () => void
}

export function TrackingButton({
  title,
  isBackground = false,
  isDisabled = false,
  onPress
}: Props) {
  return (
    <S.ViewWrapper isBackground={isBackground}>
      <TouchableOpacity style={{ flex: 1 }} onPress={onPress} disabled={isDisabled}>
        <S.ViewContainer>
          <S.Text>{title}</S.Text>
        </S.ViewContainer>
      </TouchableOpacity>
    </S.ViewWrapper>
  )
}
