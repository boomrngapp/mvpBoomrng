import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DarkTheme,
  DrawerActions,
} from "@react-navigation/native";

import HomeScreen from "./src/scenes/home/HomeScreen";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useColorScheme, AppearanceProvider } from "react-native-appearance";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports.js";
import SignIn from "./src/scenes/login/signin/SignInScreen";
import SignUp from "./src/scenes/login/signup/SignUpScreen";
import ConfirmSignUp from "./src/scenes/login/confirmsignup/ConfirmSignUp";
import ForgotPassword from "./src/scenes/login/resetpassword/ForgotPassword";
import ForgotPasswordSubmit from "./src/scenes/login/resetpassword/ForgotPasswordSubmit";
import AccountScreen from "./src/scenes/account/AccountScreen";
import AddressBookScreen from "./src/scenes/addressbook/AddressBookScreen";
import BrowseCardsScreen from "./src/scenes/browser/BrowseCardsScreen";
import SplashScreen from "./src/scenes/splash/SplashScreen";
import OrdersScreen from "./src/scenes/order/OrdersScreen";
import { dark } from "@material-ui/core/styles/createPalette";

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const AuthenicationStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthenticationNavigator = (props) => {
  return (
    <AuthenicationStack.Navigator headerMode="none">
      <AuthenicationStack.Screen name="SignIn">
        {(screenProps) => (
          <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
        )}
      </AuthenicationStack.Screen>
      <AuthenicationStack.Screen name="SignUp" component={SignUp} />
      <AuthenicationStack.Screen
        name="ConfirmSignUp"
        component={ConfirmSignUp}
      />
      <AuthenicationStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <AuthenicationStack.Screen
        name="ForgotPasswordSubmit"
        component={ForgotPasswordSubmit}
      />
    </AuthenicationStack.Navigator>
  );
};

const AppNavigator = (props) => {
  function AppLogo() {
    return (
      <Image
        source={require("./src/assets/images/icon.png")}
        style={{ width: 50, height: 50 }}
      />
    );
  }

  function HomeTab() {
    return (
      <MaterialBottomTabs.Navigator
        activeColor="#e5e7e9"
        inactiveColor="#024E99"
        // screenOptions={}
      >
        <MaterialBottomTabs.Screen 
          name="Home" 
          options={{ 
            tabBarLabel: "Home",
            tabBarIcon: () => (<MaterialCommunityIcons name="home" color='#024E99' size={26} />) 
          }}
          >
          {(screenProps) => (
            <HomeScreen
            {...screenProps}
            updateAuthState={props.updateAuthState}
            />
            )}
        </MaterialBottomTabs.Screen>
        <MaterialBottomTabs.Screen 
          name="Account"
          options={{ 
            tabBarLabel: "Account",
            tabBarIcon: () => (<MaterialCommunityIcons name="account" color='#02ADED' size={26} />) 
          }}
          >
          {(screenProps) => (
            <AccountScreen
            {...screenProps}
            updateAuthState={props.updateAuthState}
            />
            )}
        </MaterialBottomTabs.Screen>
        <MaterialBottomTabs.Screen 
        name="Orders"
        options={{ 
          tabBarLabel: "Orders",
          tabBarIcon: () => (<MaterialCommunityIcons name="cart" color='#FFBB00' size={26} />) 
        }}
        >
          {(screenProps) => (
            <OrdersScreen
              {...screenProps}
              updateAuthState={props.updateAuthState}
            />
          )}
        </MaterialBottomTabs.Screen>
      </MaterialBottomTabs.Navigator>
    );
  }

  return (
    <AppStack.Navigator
      screenOptions={{
        headerStyle: {},
        headerTitleAlign: "center",
        headerTitle: (props) => <AppLogo {...props} />,
      }}
    >
      <AppStack.Screen name="Home" component={HomeTab}></AppStack.Screen>
      <AppStack.Screen name="BrowseCards" component={BrowseCardsScreen}></AppStack.Screen>
    </AppStack.Navigator>
  );
};

const Initializing = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#C70136" />
    </View>
  );
};

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState("initializing");
  useEffect(() => {
    checkAuthState();
  }, []);
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log("User is signed in");
      setUserLoggedIn("loggedIn");
    } catch (err) {
      console.log(" User is not signed in");
      setUserLoggedIn("loggedOut");
    }
  }
  function updateAuthState(isUserLoggedIn: React.SetStateAction<string>) {
    setUserLoggedIn(isUserLoggedIn);
  }

  return (
    <AppearanceProvider>
      <NavigationContainer>
        {isUserLoggedIn === "initializaing" && <Initializing />}
        {isUserLoggedIn === "loggedIn" && (
          <AppNavigator updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === "loggedOut" && (
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
    </AppearanceProvider>
  );
}

export default App;
