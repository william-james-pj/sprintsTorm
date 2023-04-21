import { coinBaseValue } from 'src/constants/coinBaseValue'

export const calculateCoins = (round: number, level: number): number => {
  const coins = level * coinBaseValue + round * 10
  return Math.round(coins)
}
