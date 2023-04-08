import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { LoggedStackNavigator } from './logged'

// import { LogoutStackNavigator } from './logout'

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <LoggedStackNavigator />
      </NavigationContainer>
    </View>
  )
}
