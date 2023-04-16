import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { useAuth } from 'src/hooks/useAuth'

import { LoggedStackNavigator } from './logged'
import { LogoutStackNavigator } from './logout'

export function Routes() {
  const { user } = useAuth()

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {!user?.id ? <LogoutStackNavigator /> : <LoggedStackNavigator />}
      </NavigationContainer>
    </View>
  )
}
