import "react-native-gesture-handler";
import  React, { useState,useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "./src/scenes/home/HomeScreen";
import AccountScreen from "./src/scenes/account/AccountScreen";
import BrowseCardsScreen from "./src/scenes/browser/BrowseCardsScreen";
import OrdersScreen from "./src/scenes/order/OrdersScreen";
import AddressBookScreen from "./src/scenes/addressbook/AddressBookScreen";

import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports.js";
import SignIn from "./src/scenes/login/signin/SignInScreen"
import SignUp from "./src/scenes/login/signup/SignUpScreen"
import ConfirmSignUp from "./src/scenes/login/confirmsignup/ConfirmSignUp"
import { ActivityIndicator } from "react-native-paper";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const AuthenicationStack = createStackNavigator();
const AppStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const image = "./src/assets/images/HomeScreen.png";

const AuthenticationNavigator = props => {
  return (
    <AuthenicationStack.Navigator headerMode="none">
      <AuthenicationStack.Screen name="SignIn">
        {screenProps => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenicationStack.Screen>
      <AuthenicationStack.Screen name="SignUp" component={SignUp} />
      <AuthenicationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
      />
    </AuthenicationStack.Navigator>
  );
};

const AppNavigator = props => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home">
        {screenProps => (
          <HomeScreen {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
  );
};

const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#C70136" />
    </View>
  )
}

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
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');
  useEffect(() => {
    checkAuthState();
  },[]);
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log('User is signed in');
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.log(' User is not signed in');
      setUserLoggedIn('loggedOut')
    }
  }
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }
  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializaing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <AppNavigator updateAuthState={updateAuthState} />
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator updateAuthState={updateAuthState} />
      )}

    </NavigationContainer>
  );
}

export default App;
