/* @flow */
import AppNavigator from '../navigators/AppNavigator'

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('Login')
)

export default (state: any = initialState, action: any) => {
  const nextState = AppNavigator.router.getStateForAction(action, state)

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
