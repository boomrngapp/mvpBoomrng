import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../../../components/atoms/AppTextInput';
import AppButton from '../../../components/atoms/AppButton';
export default function ForgotPassword({ navigation }) {
    const [username, setUsername] = useState('');
    async function ForgotPassword() {
        try {
            await Auth.forgotPassword(username);
            console.log('Code sent to email');
            navigation.navigate('ForgotPasswordSubmit');
        } catch (error) {
            console.log(
                'Please enter a valid username.',
                error.code
            );
        }
    }
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../../assets/images/icon.png')} />
                <Text style={styles.title}>Forgot Password</Text>
                <AppTextInput
                    value={username}
                    onChangeText={text => setUsername(text)}
                    leftIcon="account"
                    placeholder="Enter email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress" 
                />
                <AppButton title="Submit" onPress={ForgotPassword} />
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.forgotPasswordButtonText}>
                            Return to Sign In
                        </Text>
                    </TouchableOpacity>
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
    footerButtonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPasswordButtonText: {
        color: '#C70136',
        fontSize: 18,
        fontWeight: '600'
    },
    logo: {},
    title: {
        fontSize: 20,
        color: '#024E99',
        fontWeight: '500',
        marginVertical: 15
    }
});