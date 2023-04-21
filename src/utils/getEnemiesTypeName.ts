export const getEnemiesTypeName = (type: ResistanceTypeProps): string => {
  if (type === 'warrior') return 'Guerreiro'
  if (type === 'mage') return 'Mago'
  if (type === 'archer') return 'Arqueiro'
  return 'Todos'
}
