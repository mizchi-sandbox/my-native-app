/* @flow */
import React from 'react'
import { AppRegistry } from 'react-native'
import HomeScreen from 'native/components/HomeScreen'

const App = () => {
  return <HomeScreen navigation={{ navigate() {} }} />
}

AppRegistry.registerComponent('App', () => App)
AppRegistry.runApplication('App', {
  rootTag: document.querySelector('main')
})
