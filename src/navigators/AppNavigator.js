/* @flow */
import { StackNavigator } from 'react-navigation'
import LoginScreen from '../components/LoginScreen'
import HomeScreen from '../components/HomeScreen'
import ConfigScreen from '../components/ConfigScreen'

const routes = {
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
  Config: { screen: ConfigScreen }
}

export default StackNavigator(routes)
