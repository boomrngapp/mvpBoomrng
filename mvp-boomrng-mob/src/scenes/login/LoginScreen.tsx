import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";


const image = '../../assets/images/LoginScreen.png'

function LoginScreen() {
  return (
    <View>
      <ImageBackground 
        source = {require(image)}
        style = {{ width: '100%', height: '100%', opacity: 1}}
      ></ImageBackground>

    </View>
    
  );
}


export default LoginScreen;