import { TimeBox } from '../components/TimeBox'
import { TrackingButton } from '../components/TrackingButton'
import { TrackingHeader } from '../components/TrackingHeader'

import * as S from './styles'

export function TrackingScreen() {
  return (
    <S.ViewWrapper>
      <S.ViewHeader>
        <TrackingHeader title={'Correndo'} onClose={() => {}} />
        <S.ViewMap></S.ViewMap>
      </S.ViewHeader>
      <S.ViewFooter>
        <TimeBox />
        <S.ViewButtonContainer>
          <TrackingButton title="Pausar" onPress={() => {}} />
          <TrackingButton title="Terminar" onPress={() => {}} />
        </S.ViewButtonContainer>
      </S.ViewFooter>
    </S.ViewWrapper>
  )
}
