import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Auth } from "aws-amplify";

const image = '../../assets/images/OrdersScreen.png'

function OrdersScreen({ updateAuthState }) {
  return (
    <View>
      <ImageBackground 
        source = {require(image)}
        style = {{ width: '100%', height: '100%', opacity: 1}}
      ></ImageBackground>

    </View>
    
  );
}


export default OrdersScreen;