import React, { Component } from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const image = '../../assets/images/HomeScreen.png'

function HomeScreen() {
  return (
      <View style={styles.container}>
        <ImageBackground 
          source={require(image)} 
          style={{width: '100%', height: '100%', opacity: 0.8}}>
          <Text style={styles.text}>Home</Text>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
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