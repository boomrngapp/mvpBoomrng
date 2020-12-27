import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { Auth } from "aws-amplify";

const image = '../../assets/images/AddressBookScreen.png'

function AddressBookScreen({ updateAuthState }) {
  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState("loggedOut");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }
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