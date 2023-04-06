import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

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
    </Stack.Navigator>
  )
}
