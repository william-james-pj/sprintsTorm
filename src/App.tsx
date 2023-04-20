import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContextProvider } from 'src/contexts/AuthContext'
import { ColorModeContext } from 'src/contexts/ColorModeContext'
import { RewardsContextProvider } from 'src/contexts/RewardsContext'

import { Routes } from './router'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <ColorModeContext>
        <AuthContextProvider>
          <RewardsContextProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <Routes />
            </GestureHandlerRootView>
          </RewardsContextProvider>
        </AuthContextProvider>
      </ColorModeContext>
    </SafeAreaProvider>
  )
}
