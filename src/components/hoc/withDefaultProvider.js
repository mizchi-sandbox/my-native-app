/* @flow */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { Provider } from 'react-redux'
import defaultInitStore from '../../store'

let _store: any = null
function withProvider<P>(initStore: Function): $$HoC<P> => $$HoC<P> {
  return Wrapped =>
    class ReduxProvider extends React.Component {
      props: P
      constructor(props: P, context: any) {
        if (!_store) {
          _store = initStore(props)
        }
        super(props, context)
      }
      render() {
        const props: any = this.props
        return (
          <Provider store={_store}>
            <Wrapped {...props} />
          </Provider>
        )
      }
    }
}

export default function withDefaultProvider<P>(Wrapped: $$HoC<P>): $$HoC<P> {
  return withProvider(() => defaultInitStore())(Wrapped)
}
