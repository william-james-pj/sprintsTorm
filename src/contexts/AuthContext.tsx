import * as AuthSession from 'expo-auth-session'
import Constants from 'expo-constants'
import * as WebBrowser from 'expo-web-browser'
import { createContext, ReactNode, useState } from 'react'

type AuthContextType = {
  user: UserType | undefined
  isLoading: boolean
  handleGoogleSignIn: () => Promise<void>
}

type AuthContextProviderProps = {
  children: ReactNode
}

type AuthResponse = {
  params: {
    access_token: string
  }
  type: string
}

export const AuthContext = createContext({} as AuthContextType)

WebBrowser.maybeCompleteAuthSession()

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserType>()
  const [isLoading, setIsLoading] = useState(true)

  async function handleGoogleSignIn() {
    try {
      const CLIENT_ID = Constants?.manifest?.extra?.EXPO_KEY
      const REDIRECT_URI = Constants?.manifest?.extra?.REDIRECT_URI
      const SCOPE = encodeURI('profile email')
      const RESPONSE_TYPE = 'token'

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({ authUrl })) as AuthResponse

      if (type === 'success') {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        )
        const userJson = await response.json()
        setUser({
          id: userJson.id,
          email: userJson.email,
          name: userJson.name,
          picture: userJson.picture
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        handleGoogleSignIn
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
