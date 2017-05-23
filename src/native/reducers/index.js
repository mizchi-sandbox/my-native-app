/* @flow */
import { combineReducers } from 'redux'
import home from 'shared/reducers/home'
import config from 'shared/reducers/config'
import navigation from './navigation'

export default combineReducers({
  home,
  config,
  navigation
})
