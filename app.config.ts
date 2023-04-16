/* eslint-disable no-undef */
import 'dotenv/config'

module.exports = {
  expo: {
    name: 'sprintsTorm',
    slug: 'sprintsTorm',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSLocationAlwaysAndWhenInUseUsageDescription: 'REASON_FOR_REQUEST',
        UIBackgroundModes: ['location', 'fetch']
      }
    },
    android: {
      package: 'com.williamjamesjr.sprintstorm',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      permissions: ['ACCESS_BACKGROUND_LOCATION']
    },
    web: {
      favicon: './assets/favicon.png'
    },
    scheme:
      '//expo-development-client/?url=https://u.expo.dev/3baaa41a-3722-4972-8a75-951f517c3a09?channel-name=sprintsTorm',
    extra: {
      EXPO_KEY: process.env.EXPO_KEY,
      ANDROID_KEY: process.env.ANDROID_KEY,
      API_KEY: process.env.FIREBASE_API_KEY,
      AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      MESSAGE_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      APP_ID: process.env.FIREBASE_APP_ID,
      MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
      eas: {
        projectId: '3baaa41a-3722-4972-8a75-951f517c3a09'
      }
    },
    eas: {
      projectId: '3baaa41a-3722-4972-8a75-951f517c3a09'
    }
  }
}
