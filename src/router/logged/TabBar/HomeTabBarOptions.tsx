import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute, ParamListBase, RouteProp } from '@react-navigation/native'

import { IconTabBar } from './IconTabBar'

type HomeTabBarOptionsProps = {
  route: RouteProp<ParamListBase, 'HomeStack'>
  style: any
}

export function HomeTabBarOptions({
  route,
  style
}: HomeTabBarOptionsProps): BottomTabNavigationOptions {
  return {
    tabBarStyle: ((route) => {
      const routeName = getFocusedRouteNameFromRoute(route) ?? ''
      if (routeName === 'LastTraining') {
        return { display: 'none' }
      }
      return style
    })(route),
    tabBarIcon: ({ focused }) => <IconTabBar icon="Home" focused={focused} />
  }
}
