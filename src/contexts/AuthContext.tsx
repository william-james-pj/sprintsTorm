import * as AuthSession from 'expo-auth-session'
import Constants from 'expo-constants'
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, signInWithCredential, signOut } from 'firebase/auth'
import { createContext, ReactNode, useState } from 'react'

import { auth } from 'src/services/firebase'

type AuthContextType = {
  user: UserType | undefined
  isLoading: boolean
  handleGoogleSignIn: () => Promise<void>
  logout: () => void
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
  const [isLoading, setIsLoading] = useState(false)

  async function handleGoogleSignIn() {
    try {
      setIsLoading(true)
      const CLIENT_ID = Constants?.manifest?.extra?.EXPO_KEY
      const REDIRECT_URI = Constants?.manifest?.extra?.REDIRECT_URI
      const SCOPE = encodeURI('profile email')
      const RESPONSE_TYPE = 'token'

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({ authUrl })) as AuthResponse
      if (type === 'success') {
        const credential = GoogleAuthProvider.credential(null, params.access_token)

        const userCredential = await signInWithCredential(auth, credential)

        const userFirebase = userCredential.user

        setUser({
          id: userFirebase.uid,
          email: userFirebase.email ?? '',
          name: userFirebase.displayName ?? '',
          picture: userFirebase.photoURL ?? ''
        })
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  function logout() {
    signOut(auth).then(() => {
      setUser(undefined)
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        handleGoogleSignIn,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
