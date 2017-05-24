/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { Text, View } from 'react-native'
import withNavigation from './hoc/withNavigation'

export default compose(
  withNavigation({ title: 'Config' })
)(function ConfigScreen(_props: { navigation: $$NavigationProps }) {
  return (
    <View>
      <Text>This is ConfigScreen</Text>
    </View>
  )
})
