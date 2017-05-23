/* @flow */
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default (initialState: any = undefined) => {
  return createStore(rootReducer, initialState)
}
