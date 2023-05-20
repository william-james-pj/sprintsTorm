import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthContextProvider } from 'src/contexts/AuthContext'
import { BattleContextProvider } from 'src/contexts/BattleContext'
import { ColorModeContext } from 'src/contexts/ColorModeContext'
import { EnemiesContextProvider } from 'src/contexts/EnemiesContext'
import { StatusContextProvider } from 'src/contexts/StatusContext'
import { TaskContextProvider } from 'src/contexts/TaskContext'
import { TrackingContextProvider } from 'src/contexts/TrackingContext'
import { WarriorsContextProvider } from 'src/contexts/WarriorsContext'

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
          <StatusContextProvider>
            <EnemiesContextProvider>
              <WarriorsContextProvider>
                <BattleContextProvider>
                  <TrackingContextProvider>
                    <TaskContextProvider>
                      <GestureHandlerRootView style={{ flex: 1 }}>
                        <Routes />
                      </GestureHandlerRootView>
                    </TaskContextProvider>
                  </TrackingContextProvider>
                </BattleContextProvider>
              </WarriorsContextProvider>
            </EnemiesContextProvider>
          </StatusContextProvider>
        </AuthContextProvider>
      </ColorModeContext>
    </SafeAreaProvider>
  )
}
