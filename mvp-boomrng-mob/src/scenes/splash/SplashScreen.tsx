import React from 'react';
import { StyleSheet, Button, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const image = '../../assets/images/AppSplashPage-R12.png'

function SplashScreen({navigation}) {
  return (
    <View>
      <ImageBackground 
        source = {require(image)}
        style = {{ width: '100%', height: '100%', opacity: 1}}
      >
      <Button 
        title="Login"
        onPress={() => navigation.navigate('Login')} />
      </ImageBackground>
    </View>
    
  );
}


export default SplashScreen;
