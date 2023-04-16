import { AuthRequestPromptOptions, AuthSessionResult } from 'expo-auth-session'
import Constants from 'expo-constants'
import * as WebBrowser from 'expo-web-browser'
import { createContext, ReactNode, useEffect, useState } from 'react'

import * as Google from 'expo-auth-session/providers/google'

type AuthContextType = {
  user: UserType | undefined
  isLoading: boolean
  promptAsync: (options?: AuthRequestPromptOptions | undefined) => Promise<AuthSessionResult>
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

WebBrowser.maybeCompleteAuthSession()

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [token, setToken] = useState<string>()
  const [user, setUser] = useState<UserType>()
  const [isLoading, setIsLoading] = useState(true)

  const [, response, promptAsync] = Google.useAuthRequest({
    androidClientId: Constants?.manifest?.extra?.ANDROID_KEY,
    expoClientId: Constants?.manifest?.extra?.EXPO_KEY
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response?.authentication?.accessToken)
      token && getUserInfo()
    }
  }, [response, token])

  const getUserInfo = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` }
      })

      const user = await response.json()
      setUser({ id: user.id })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        promptAsync
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
