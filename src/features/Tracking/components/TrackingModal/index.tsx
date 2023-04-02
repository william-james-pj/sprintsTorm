import { TrackingButton } from '../TrackingButton'
import * as S from './styles'

type TrackingModalProps = {
  onDiscard: () => void
  onSave: () => void
}

export function TrackingModal({ onDiscard, onSave }: TrackingModalProps) {
  return (
    <S.ViewWrapper style={{ borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
      <S.TextTitle>Tem certeza que deseja finalizar?</S.TextTitle>

      <S.ViewButtonContainer>
        <TrackingButton title="Sair e descartar" onPress={onDiscard} />
        <TrackingButton title="Terminar" onPress={onSave} />
      </S.ViewButtonContainer>
    </S.ViewWrapper>
  )
}
