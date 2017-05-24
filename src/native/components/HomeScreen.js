/* @flow */
import React from 'react'
import { compose } from 'recompose'
import { Container, Button, Text } from 'native-base'
import withNavigation from './hoc/withNavigation'

export default compose(
  withNavigation({ title: 'Home' })
)(function ConfigScreen(props: { navigation: $$NavigationProps }) {
  const { navigate } = props.navigation
  return (
    <Container>
      <Button onPress={() => navigate('Config')}>
        <Text>
          Config
        </Text>
      </Button>
      <Button onPress={() => navigate('Map')}>
        <Text>
          Map
        </Text>
      </Button>
    </Container>
  )
})
