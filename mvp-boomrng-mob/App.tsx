import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet } from "react-native"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/scenes/home/HomeScreen'
import LoginScreen from './src/scenes/login/LoginScreen'
import { AmplifyTheme} from './src/styles/AmplifyTheme'


import Amplify from 'aws-amplify'
import config from './aws-exports.js'
import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure(config)

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Login" component = {LoginScreen} /> */}
        <Stack.Screen name="Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App,false,[

], AmplifyTheme);