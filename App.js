import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }from 'react-navigation'

import LoginScreen from './screen/LoginScreen';
import Icon  from 'react-native-vector-icons/Ionicons';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import ProfileScreen from './screen/ProfileScreen';
import SettingScreen from './screen/SettingScreen';
import Setting2Screen from './screen/Setting2Screen';
import Inscription from './screen/Inscription';




const AppNavigator = createStackNavigator(
  {
    inscr: LoginScreen
  },
 {
   headerMode:"none"
 }
);
export default createAppContainer(AppNavigator);