/* @flow */
// Copied from https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/src/bin/crna-entry.js
import * as Expo from 'expo'
import React from 'react'
import { View } from 'react-native'
import App from './App'

// we don't want this to require transformation
class AwakeInDevApp extends React.Component {
  render() {
    return React.createElement(
      View,
      {
        style: {
          flex: 1
        }
      },
      React.createElement(App),
      React.createElement(
        process.env.NODE_ENV === 'development' ? Expo.KeepAwake : View
      )
    )
  }
}

Expo.registerRootComponent(AwakeInDevApp)
