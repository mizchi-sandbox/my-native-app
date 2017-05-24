/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { MapView } from 'expo'
import withNavigation from './hoc/withNavigation'

export default compose(
  withNavigation({ title: 'Map' })
)(function MapScreen(_props: { navigation: $$NavigationProps }) {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  )
})
