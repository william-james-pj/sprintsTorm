export const getEnemiesWeaknessName = (type: EnemyAbilityTypeProps): string => {
  const weaknessTable = {
    all: 'Todos',
    mage: 'Arqueiro',
    warrior: 'Mago',
    archer: 'Guerreiro'
  }
  return weaknessTable[type]
}
