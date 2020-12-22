import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

const image = '../../assets/images/AddressBookScreen.png'

function AddressBookScreen() {
  return (
    <View>
      <ImageBackground 
        source = {require(image)}
        style = {{ width: '100%', height: '100%', opacity: .8}}
      ></ImageBackground>

    </View>
    
  );
}


export default AddressBookScreen;