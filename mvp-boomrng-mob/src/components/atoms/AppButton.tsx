import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { primary } from '../../styles/LocalAmplifyTheme';

export default function AppButton({ title, onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        color: '#FFBB00',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 210,
        height: 45,
        backgroundColor: '#FFBB00',
        borderBottomColor: '#AFAFAF',
        borderBottomWidth: 3,
        borderRightColor: '#AFAFAF',
        borderRightWidth: 3,
        borderLeftColor: '#AFAFAF',
        borderLeftWidth: 1,
        // shadowColor: '#CACECE',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        // textTransform: 'uppercase'
    }
});