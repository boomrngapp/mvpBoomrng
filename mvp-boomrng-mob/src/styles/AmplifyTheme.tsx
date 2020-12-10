import { StyleSheet } from 'react-native'

const AmplifyTheme = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: 'rgba(255,100,150,1.0)'
    },
    navBar: {
        marginTop: 35,
        padding: 15,
    }

})

export {AmplifyTheme}