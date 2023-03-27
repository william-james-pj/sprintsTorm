import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { BottomTabNavigator } from './TabBar'

const Stack = createStackNavigator<LoggedParamList>()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent'
  }
}

export function LoggedStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="TabBar" component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}
