import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { BattleScreen } from 'src/features/Battle/view'
import { BattleLevelMap } from 'src/features/BattleLevelMap/view'
import { HomeScreen } from 'src/features/Home/view'
import { LastTraining } from 'src/features/LastTraining/view'

const Stack = createStackNavigator<HomeParamList>()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent'
  }
}

export function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LastTraining" component={LastTraining} />
      <Stack.Screen name="BattleLevelMap" component={BattleLevelMap} />
      <Stack.Screen name="Battle" component={BattleScreen} />
    </Stack.Navigator>
  )
}
