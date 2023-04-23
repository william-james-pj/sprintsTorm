export const checkEnemyWeakness = (warrior: WarriorsProps, enemy: EnemiesProps): boolean => {
  const weaknessTable = {
    all: () => true,
    mage: (warrior: WarriorsProps) => warrior.ability === 'archer',
    warrior: (warrior: WarriorsProps) => warrior.ability === 'mage',
    archer: (warrior: WarriorsProps) => warrior.ability === 'warrior',
    default: () => false
  }

  return (weaknessTable[enemy.ability] || weaknessTable['default'])(warrior)
}
