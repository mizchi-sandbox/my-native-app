/* @flow */
/* eslint-disable import/named */
import React from 'react'
import { Constants } from 'expo'
import { StyleSheet, View, Dimensions } from 'react-native'
import Navigator from './Navigator'

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
