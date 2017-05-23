/* @flow */
import React from 'react'
import { Text, View, Button } from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  props: {
    navigation: {
      navigate: Function
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Text>This is Home</Text>
        <Button onPress={() => navigate('Config')} title="> Config" />
      </View>
    )
  }
}
