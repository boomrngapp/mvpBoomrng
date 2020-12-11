import 'react-native-gesture-handler';
import * as React from 'react';
import { ImageBackground, StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

import HomeScreen from './src/scenes/home/HomeScreen'
import LoginScreen from './src/scenes/login/LoginScreen'
import { AmplifyTheme} from './src/styles/AmplifyTheme'


import Amplify from 'aws-amplify'
import config from './aws-exports.js'
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
})

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const image = { uri: './src/assets/images/HomeScreen.png' }


function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  )
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Account" component={HomeScreen} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component = {LoginScreen} />
        <Stack.Screen name="Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withAuthenticator(App,false,[],false,AmplifyTheme);