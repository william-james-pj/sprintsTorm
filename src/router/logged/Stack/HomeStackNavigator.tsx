import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { HomeScreen } from 'src/features/Home/view'

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
    </Stack.Navigator>
  )
}
