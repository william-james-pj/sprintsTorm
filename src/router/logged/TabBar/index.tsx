import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, View } from 'react-native'
import { useTheme } from 'styled-components'

import { CollectionStackNavigator } from 'src/router/logged/Stack/CollectionStackNavigator'
import { HomeStackNavigator } from 'src/router/logged/Stack/HomeStackNavigator'
import { FloatingButton } from 'src/router/logged/TabBar/FloatingButton'
import { IconTabBar } from 'src/router/logged/TabBar/IconTabBar'

import { HomeTabBarOptions } from './HomeTabBarOptions'

const Tab = createBottomTabNavigator()

export function BottomTabNavigator() {
  const theme = useTheme()

  const styles = StyleSheet.create({
    navigatorContainer: {
      backgroundColor: `transparent`,
      height: 150,

      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22
    },
    navigator: {
      position: 'absolute',
      borderTopWidth: 0,
      backgroundColor: 'transparent',
      elevation: 30,
      height: 60
    }
  })

  return (
    <Tab.Navigator
      tabBar={(props) => (
        <View style={styles.navigatorContainer}>
          <BottomTabBar {...props} />
        </View>
      )}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.navigator,
        tabBarItemStyle: {
          backgroundColor: `${theme.colors.card}`
        }
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={({ route }) => HomeTabBarOptions({ route, style: styles.navigator })}
      />

      <Tab.Screen
        name={'ActionButton'}
        component={EmptyScreen}
        options={{
          tabBarButton: (props) => <FloatingButton bgColor={theme.colors.card} {...props} />
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault()
            navigation.navigate('Tracking')
          }
        })}
      />

      <Tab.Screen
        name="RankingStack"
        component={CollectionStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => <IconTabBar icon="Cards" focused={focused} />
        }}
      />
    </Tab.Navigator>
  )
}

const EmptyScreen = () => <View />
