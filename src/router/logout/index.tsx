import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'

import { LoginScreen } from 'src/features/Login/view'

const Stack = createStackNavigator<LogoutStackParamList>()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent'
  }
}

export function LogoutStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}
