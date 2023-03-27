import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { RankingScreen } from 'src/features/Ranking/view'

const Stack = createStackNavigator<RankingParamList>()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent'
  }
}

export function RankingStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Ranking" component={RankingScreen} />
    </Stack.Navigator>
  )
}
