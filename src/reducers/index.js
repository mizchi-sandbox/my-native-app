/* @flow */
import { combineReducers } from 'redux'
import home from './home'
import config from './config'
import navigation from './navigation'

export default combineReducers({
  home,
  config,
  navigation
})
