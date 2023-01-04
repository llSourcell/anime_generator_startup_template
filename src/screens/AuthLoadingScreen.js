import React from 'react'
import { ActivityIndicator } from 'react-native'
import Background from '../components/Background'
import { theme } from '../core/theme'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default function AuthLoadingScreen({ navigation }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is logged in
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    } else {
      // User is not logged in
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
    }
  })

  return (
    <Background>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </Background>
  )
}
