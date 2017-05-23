/* @flow */
import React from 'react'

export default function withNavigation<P>(navigationOptions: {
  title?: string
}): $$HoC<P> => $$HoC<P> {
  return Wrapped =>
    class ReduxProvider extends React.Component {
      static navigationOptions = navigationOptions
      render() {
        const props: any = this.props
        return <Wrapped {...props} />
      }
    }
}
