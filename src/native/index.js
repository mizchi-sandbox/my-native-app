/* eslint-disable */
import Expo from 'expo'
import React from 'react'
import { View } from 'react-native'
import App from './components/App'

// we don't want this to require transformation
class AwakeInDevApp extends React.Component {
  state: { isReady: boolean } = {
    isReady: false
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf')
    })

    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return (
      <View style={{ flex: 1 }}>
        <App />
        {process.env.NODE_ENV === 'development' ? Expo.KeepAwake : View}
      </View>
    )
  }
}

Expo.registerRootComponent(AwakeInDevApp)
