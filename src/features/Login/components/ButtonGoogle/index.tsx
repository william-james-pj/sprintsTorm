import { RectButton } from 'react-native-gesture-handler'

import GoogleSVG from 'src/assets/svg/google.svg'

import * as S from './styles'

type Props = {
  onPress: () => void
  isLoading?: boolean
}

export function ButtonGoogle({ onPress, isLoading = false }: Props) {
  return (
    <S.Wrapper>
      <RectButton onPress={onPress} enabled={!isLoading}>
        <S.ButtonWrapper>
          {isLoading ? (
            <S.Indicator size="small" />
          ) : (
            <>
              <GoogleSVG />
              <S.Title>Login with Google</S.Title>
            </>
          )}
        </S.ButtonWrapper>
      </RectButton>
    </S.Wrapper>
  )
}
