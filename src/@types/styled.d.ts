import 'styled-components '

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string

      background: string
      background_overlay: string
      card: string

      text: string
      disabled: string

      exp: string
      coin: string
      life: string

      green: string
    }
  }
}
