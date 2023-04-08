import { RectButton } from 'react-native-gesture-handler'

import GoogleSVG from 'src/assets/svg/google.svg'

import * as S from './styles'

type ButtonGoogleProps = {
  onPress: () => void
}

export function ButtonGoogle({ onPress }: ButtonGoogleProps) {
  return (
    <S.Wrapper>
      <RectButton onPress={onPress}>
        <S.ButtonWrapper>
          <GoogleSVG />
          <S.Title>Login with Google</S.Title>
        </S.ButtonWrapper>
      </RectButton>
    </S.Wrapper>
  )
}
