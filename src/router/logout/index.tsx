import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'

import { LoginWithEmail } from 'src/features/LoginWithEmail/view'
import { SignUp } from 'src/features/SignUp/view'

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
      <Stack.Screen name="Login" component={LoginWithEmail} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
