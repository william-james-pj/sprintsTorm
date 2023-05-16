import { TouchableOpacity } from 'react-native'

import { AbilityCard } from 'src/components/AbilityCard'
import { Card } from 'src/components/Card'
import { ClassTypeCard } from 'src/components/ClassTypeCard'
import { Coins } from 'src/components/Coins'
import { baseDamageValue } from 'src/constants/baseDamageValue'
import { coinBaseValue } from 'src/constants/coinBaseValue'
import { useWarriors } from 'src/hooks/useWarriors'

import * as S from './styles'

type Props = {
  onBuy: (type: WarriorAbilityTypeProps) => void
  item: WarriorsProps
}

export function CardDetails({ onBuy, item }: Props) {
  const { userArmy } = useWarriors()

  return (
    <S.ViewWrapper>
      <S.ViewDetails>
        <Card hideName qtd={userArmy ? userArmy[item.ability] : 0} item={item} />
        <S.ViewTextContainer>
          <S.TextName>{item.name}</S.TextName>
          <S.TextDescription>{item.description}</S.TextDescription>
        </S.ViewTextContainer>
      </S.ViewDetails>

      <S.ViewAbility>
        <ClassTypeCard type={item.ability} />
        <AbilityCard type="damage" value={`${baseDamageValue}`} />
      </S.ViewAbility>

      <S.ViewButton>
        <TouchableOpacity style={{ width: '100%' }} onPress={() => onBuy(item.ability)}>
          <S.ViewButtonContent>
            <Coins coin={`${coinBaseValue}`} />
          </S.ViewButtonContent>
        </TouchableOpacity>
      </S.ViewButton>
    </S.ViewWrapper>
  )
}
