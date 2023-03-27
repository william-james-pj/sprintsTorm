import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

export function Routes() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <View style={{ flex: 1 }}></View>
      </NavigationContainer>
    </View>
  )
}
