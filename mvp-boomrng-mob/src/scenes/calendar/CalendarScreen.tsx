import React, { useEffect } from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import { Auth } from "aws-amplify";
import * as Calendar from "expo-calendar";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from '../../components/atoms/AppButton';

function CalendarScreen({updateAuthState, navigation}) {
    useEffect(() => {
        (async () => {
            const { status } = await Calendar.requestCalendarPermissionsAsync();
            if (status === 'granted') {
                const calendars = await Calendar.getCalendarsAsync();
                console.log('Obtained calendar access. Listing...');
                console.log({ calendars });
            }
        })();
    }, []);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Boomrng Calendar</Text>
                <AppButton title='Add Boomrng Calendar' onPress={null}></AppButton>  
            </View>
        </SafeAreaView>
    )

    async function getDefaultCalendarSource() {
        const calendars = await Calendar.getCalendarsAsync();
        const defaultCalendars = calendars.filter(each => each.source.name === 'Default');
        return defaultCalendars[0].source;
    }

    async function createCalendar() {
        const defaultCalendarSource = 
            Platform.OS === 'ios'
            ? await getDefaultCalendarSource()
            : { isLocalAccount: true, name: 'Boomrng Calendar' };
        const newCalendarID  = await Calendar.createCalendarAsync({
            title: 'Boomrng Calendar',
            color: 'blue', // todo: set color to theme
            entityType: Calendar.EntityTypes.EVENT, // note: might switch to REMINDER
            sourceId: defaultCalendarSource.id,
            source: defaultCalendarSource,
            name: 'BoomrngAppCalendar',
            ownerAccount: 'personal',
            accessLevel: Calendar.CalendarAccessLevel.OWNER,
        });
        console.log(`New calender ID is: ${newCalendarID}`);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
})

export default CalendarScreen;