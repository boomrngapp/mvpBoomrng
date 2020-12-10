import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './src/scenes/home/HomeScreen.js'

import Amplify from 'aws-amplify'
import config from './aws-exports.js'
Amplify.configure(config)

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: "center"}} >
//     <Text> Home Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> {
      <Stack.Navigator>
        <Stack.Screen name="Home" component = {HomeScreen} />
      </Stack.Navigator>
    }</NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
