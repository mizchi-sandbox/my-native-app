/* @flow */
import { StackNavigator } from 'react-navigation'
import LoginScreen from '../components/LoginScreen'
import HomeScreen from '../components/HomeScreen'
import ConfigScreen from '../components/ConfigScreen'
import MapScreen from '../components/MapScreen'

const routes = {
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Config: { screen: ConfigScreen },
  Map: { screen: MapScreen }
}

export default StackNavigator(routes)
