/* @flow */
import { StackNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
import ConfigScreen from './screens/ConfigScreen'

export default StackNavigator({
  Home: { screen: HomeScreen },
  Config: { screen: ConfigScreen }
})
