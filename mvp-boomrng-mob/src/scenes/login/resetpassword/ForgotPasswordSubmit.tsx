import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../../../components/atoms/AppTextInput';
import AppButton from '../../../components/atoms/AppButton';
export default function ForgotPasswordSubmit({ navigation }) {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const [new_password, setNewPassword] = useState('');
    async function forgotPasswordSubmit() {
        try {
            await Auth.forgotPasswordSubmit(username, code, new_password);
            console.log('Code confirmed');
            navigation.navigate('SignIn');
        } catch (error) {
            console.log(
                'Verification code does not match. Please enter a valid verification code.',
                error.code
            );
        }
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/images/icon.png')} />
                <Text style={styles.title}>Password Reset</Text>
                <AppTextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    leftIcon="account"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress" 
                />
                <AppTextInput
                    value={code}
                    onChangeText={text => setCode(text)}
                    leftIcon="numeric"
                    placeholder="Enter verification code"
                    keyboardType="numeric" 
                />
                <AppTextInput
                    value={new_password}
                    onChangeText={text => setNewPassword(text)}
                    leftIcon="lock"
                    placeholder="Enter new password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password" 
                />
                <AppButton title="Submit New Password" onPress={forgotPasswordSubmit} />
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
    logo: {},
    title: {
        fontSize: 20,
        color: '#024E99',
        fontWeight: '500',
        marginVertical: 15
    }
});