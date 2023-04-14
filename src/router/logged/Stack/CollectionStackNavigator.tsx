import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

import { CollectionScreen } from 'src/features/Collection/view'

const Stack = createStackNavigator<CollectionParamList>()

const screenOptions: StackNavigationOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent'
  }
}

export function CollectionStackNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Collection" component={CollectionScreen} />
    </Stack.Navigator>
  )
}
