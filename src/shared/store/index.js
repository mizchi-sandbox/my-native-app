/* @flow */
import { createStore } from 'redux'

export default (reducer: any, initialState: any = undefined) => {
  return createStore(reducer, initialState)
}
