/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import AppNavigator from '../navigators/AppNavigator'
import withDefaultProvider from './hoc/withDefaultProvider'

export default compose(withDefaultProvider, connect(i => i))(function App(
  props: any
) {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.navigation
      })}
    />
  )
})
