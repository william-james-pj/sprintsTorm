import Constants from 'expo-constants'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const googleProvider = new GoogleAuthProvider()

const firebaseConfig = {
  apiKey: Constants?.manifest?.extra?.API_KEY,
  authDomain: Constants?.manifest?.extra?.AUTH_DOMAIN,
  projectId: Constants?.manifest?.extra?.PROJECT_ID,
  storageBucket: Constants?.manifest?.extra?.STORAGE_BUCKET,
  messagingSenderId: Constants?.manifest?.extra?.MESSAGE_SENDER_ID,
  appId: Constants?.manifest?.extra?.APP_ID,
  measurementId: Constants?.manifest?.extra?.MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const firestore = getFirestore(app)

export { app, auth, firestore, googleProvider }
