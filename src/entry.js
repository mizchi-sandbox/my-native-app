/* eslint-disable */
// Copied from https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/src/bin/crna-entry.js
import Expo from 'expo'
import React from 'react'
import { View } from 'react-native'
import App from './components/App'

// we don't want this to require transformation
class AwakeInDevApp extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
        {process.env.NODE_ENV === 'development' ? Expo.KeepAwake : View}
      </View>
    )
  }
}

Expo.registerRootComponent(AwakeInDevApp)
