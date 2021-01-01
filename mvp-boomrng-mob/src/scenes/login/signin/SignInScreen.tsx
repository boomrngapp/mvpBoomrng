import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Auth } from 'aws-amplify';

import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../../../components/atoms/AppTextInput';
import AppButton from '../../../components/atoms/AppButton';

export default function SignIn({ navigation, updateAuthState }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    async function signIn() {
        try {
            await Auth.signIn(username, password);
            console.log('Success');
            updateAuthState('loggedIn');
        } catch (error) {
            console.log(' Error signin in...', error);
        }
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/images/icon.png')} />
                <Text style={styles.title}>Log In</Text>
                <AppTextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    leftIcon="account"
                    placeholder="Username or Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppTextInput value={password}
                    onChangeText={text => setPassword(text)}
                    leftIcon="lock"
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password" 
                />
                <Text style={styles.title}>or</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10}}>
                    <Image source={require('../../../assets/images/FB_Icon.png')}></Image>
                    <Image source={require('../../../assets/images/Google_2274401.png')}></Image>
                    <Image source={require('../../../assets/images/Amazon-icon_200x200.png')}></Image>
                </View>
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPasswordButtonText}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                <AppButton title="Log In" onPress={signIn} />
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={styles.newUserButtonText}>
                            Don't have an account? Sign Up
                        </Text>
                    </TouchableOpacity>
            </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: 200,
        height: 200,
        padding: 20,
        marginTop: 30,
    },
    title: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        marginVertical: 5
    },
    footerButtonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    newUserButtonText: {
        color: '#024E99',
        fontSize: 18,
        fontWeight: '600'
    },
    forgotPasswordButtonText: {
        color: '#024E99',
        fontSize: 14,
        fontWeight: '600'
    }
});