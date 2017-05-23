/* @flow */
/* eslint-disable import/named */
import React from 'react'
import { Constants } from 'expo'
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
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

class ConfigScreen extends React.Component {
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

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Config: { screen: ConfigScreen }
})

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator style={{ width: Dimensions.get('window').width }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight
  }
})
