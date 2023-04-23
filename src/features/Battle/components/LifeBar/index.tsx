import * as S from './styles'

type Props = {
  life: number
  currentLife: number
}

export function LifeBar({ currentLife, life }: Props) {
  const calculateLife = (): string => {
    const percentage = (currentLife / life) * 100
    return `${percentage.toFixed(0)}%`
  }

  return (
    <S.ViewWrapper>
      <S.TextLife>{`${currentLife}/${life}`}</S.TextLife>
      <S.ViewLife style={{ width: calculateLife() }} />
    </S.ViewWrapper>
  )
}
