/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import { withProvider } from 'shared/components/hoc/withDefaultProvider'
import createStore from 'shared/store'
import AppNavigator from '../navigators/AppNavigator'
import reducer from '../reducers'

export default compose(
  withProvider(() => createStore(reducer)),
  connect(i => i)
)(function App(props: any) {
  return (
    <AppNavigator
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.navigation
      })}
    />
  )
})
