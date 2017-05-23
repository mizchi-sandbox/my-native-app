/* @flow */
import React from 'react'
import { Text, View } from 'react-native'

export default class ConfigScreen extends React.Component {
  static navigationOptions = {
    title: 'Config'
  }

  props: {
    navigation: {
      navigate: Function
    }
  }

  render() {
    return (
      <View>
        <Text>This is Config</Text>
      </View>
    )
  }
}
