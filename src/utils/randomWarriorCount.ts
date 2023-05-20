export const randomWarriorCount = (qtd: number): UserArmyProps => {
  const allies: UserArmyProps = { archer: 0, mage: 0, warrior: 0 }
  let allAllies = 0

  while (allAllies < qtd) {
    const randomProperty = getRandomProperty()
    allies[randomProperty]++
    allAllies++
  }

  return allies
}

function getRandomProperty(): WarriorAbilityTypeProps {
  const properties: WarriorAbilityTypeProps[] = ['warrior', 'mage', 'archer']
  const randomIndex = Math.floor(Math.random() * properties.length)
  const randomProperty = properties[randomIndex]
  return randomProperty
}
