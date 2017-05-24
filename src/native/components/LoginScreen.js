/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { View, Button } from 'react-native'
import { Facebook } from 'expo'
import withNavigation from './hoc/withNavigation'

export default compose(
  withNavigation({ title: 'Login' })
)(function LoginScreen(props: { navigation: $$NavigationProps }) {
  const { navigate } = props.navigation
  return (
    <View>
      <Button onPress={() => navigate('Home')} title="Enter" />
      <Button
        title="Login to Facebook"
        onPress={async () => {
          const {
            type
          } = await Facebook.logInWithReadPermissionsAsync('135318889866649', {
            permissions: ['public_profile', 'email']
          })
          if (type === 'success') {
            navigate('Home')
          }
        }}
      />
    </View>
  )
})
