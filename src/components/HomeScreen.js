/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { Text, View, Button } from 'react-native'
import withNavigation from './hoc/withNavigation'

export default compose(
  withNavigation({ title: 'Home' })
)(function ConfigScreen(props: { navigation: $$NavigationProps }) {
  const { navigate } = props.navigation
  return (
    <View>
      <Text>This is HomeScreen</Text>
      <Button onPress={() => navigate('Config')} title="> Config" />
    </View>
  )
})
