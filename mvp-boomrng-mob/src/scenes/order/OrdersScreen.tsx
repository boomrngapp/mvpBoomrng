import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

const image = '../../assets/images/OrdersScreen.png'

function OrdersScreen() {
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