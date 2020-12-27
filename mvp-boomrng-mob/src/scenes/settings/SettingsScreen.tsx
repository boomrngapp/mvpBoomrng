import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Auth } from "aws-amplify";

const image = '../../assets/images/SettingsScreen.png'

function SettingsScreen({ updateAuthState }) {
  return (
    <View style={styles.container}>
      <Text>Change App Settings</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default SettingsScreen;