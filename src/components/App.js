/* @flow */
/* eslint-disable import/named */
import React from 'react'
import { Constants } from 'expo'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { StackNavigator } from 'react-navigation'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return <Text>This is Home</Text>
  }
}

const Navigator = StackNavigator({
  Home: { screen: HomeScreen }
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
