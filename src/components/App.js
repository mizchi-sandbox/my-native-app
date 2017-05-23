/* @flow */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

// const SimpleApp = StackNavigator({
//   Home: { screen: HomeScreen }
// })
//
// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome'
//   }
// }

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SimpleApp /> */}
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
