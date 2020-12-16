import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth } from 'aws-amplify';

const image = '../../assets/images/AppSplashPage-R12.png'

function HomeScreen({ updateAuthState }) {
  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState('loggedOut');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  return (
      <View style={styles.container}>
        <ImageBackground 
          source={require(image)} 
          style={{width: '100%', height: '100%', opacity: 0.8}}>
          <Button title="Sign Out" color="#02ADED" onPress={signOut} />
          <Text style={styles.text}> + </Text>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 0
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "black"
  }
});

export default HomeScreen;