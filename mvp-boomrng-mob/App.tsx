import "react-native-gesture-handler";
import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./src/scenes/home/HomeScreen";
import LoginScreen from "./src/scenes/login/LoginScreen";
import AccountScreen from "./src/scenes/account/AccountScreen";
import BrowseCardsScreen from "./src/scenes/browser/BrowseCardsScreen";
import OrdersScreen from "./src/scenes/order/OrdersScreen";

import Amplify from "aws-amplify";
import config from "./aws-exports.js";
import { withAuthenticator } from "aws-amplify-react-native";
import { AmplifyTheme } from "./src/styles/AmplifyTheme";
import AddressBookScreen from "./src/scenes/addressbook/AddressBookScreen";
import SplashScreen from "./src/scenes/splash/SplashScreen";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const image = "./src/assets/images/HomeScreen.png";

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="BrowseCards" component={BrowseCardsScreen} />
    </Tab.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Address" component={AddressBookScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withAuthenticator(App, true, [], false, AmplifyTheme);
