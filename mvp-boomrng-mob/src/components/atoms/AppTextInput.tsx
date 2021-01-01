import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppText({ leftIcon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {leftIcon && (
                <MaterialCommunityIcons
                    name={leftIcon}
                    size={20}
                    color='#E5E7E9'
                    style={styles.icon}
                />
            )}
            <TextInput
                style={styles.input}
                placeholderTextColor ='#101010'
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9f9',
        borderRadius: 25,
        flexDirection: 'row',
        padding: 5,
        marginVertical: 10,
        alignItems: 'center'
    },
    icon: {
        marginRight: 5
    },
    input: {
        width: 275,
        height: 35,
        fontSize: 18,
        color: '#101010',
        opacity: 0.26,
    }
});