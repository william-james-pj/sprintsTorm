import { ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import img from 'src/assets/img/background.png'

import * as S from './styles'

export function CollectionScreen() {
  return (
    <ImageBackground style={{ flex: 1 }} source={img}>
      <SafeAreaView style={{ flex: 1 }}></SafeAreaView>
    </ImageBackground>
  )
}
