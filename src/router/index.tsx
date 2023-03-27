import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { LoggedStackNavigator } from './logged'

// import { StackNavigator } from './logout'

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <LoggedStackNavigator />
      </NavigationContainer>
    </View>
  )
}
