import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { createContext, ReactNode, useEffect, useState } from 'react'

import { auth } from 'src/services/firebase'

type AuthContextType = {
  user: UserProps | undefined
  isLoading: boolean
  signin: (name: string, email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

type AuthContextProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const [isLoading, setIsLoading] = useState(false)

  async function signin(name: string, email: string, password: string) {
    try {
      setIsLoading(true)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(userCredential.user, { displayName: name })

      const uid = userCredential.user?.uid

      setUser({
        id: uid || '',
        name: userCredential.user?.displayName ?? '',
        email: userCredential.user?.email ?? ''
      })
      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
      setIsLoading(false)
    }
  }

  async function login(email: string, password: string) {
    try {
      setIsLoading(true)
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const uid = userCredential.user?.uid

      setUser({
        id: uid || '',
        name: userCredential.user?.displayName ?? '',
        email: userCredential.user?.email ?? ''
      })

      setIsLoading(false)
    } catch (error: any) {
      console.log(error)
      setIsLoading(false)
    }
  }

  function logout() {
    signOut(auth).then(() => {
      setUser(undefined)
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const { uid, email, displayName } = userAuth

        setUser({
          id: uid,
          name: displayName ?? '',
          email: email ?? ''
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signin,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
