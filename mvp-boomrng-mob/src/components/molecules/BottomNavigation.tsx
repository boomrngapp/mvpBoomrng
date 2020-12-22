import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons'
import * as React from 'react';
import { View } from 'react-native';
import AccountScreen from '../../scenes/account/AccountScreen';
import BrowseCardsScreen from '../../scenes/browser/BrowseCardsScreen';
import HomeScreen from '../../scenes/home/HomeScreen';
import AddressBookScreen from '../../scenes/addressbook/AddressBookScreen';
import OrdersScreen from '../../scenes/order/OrdersScreen';

const Tab = createMaterialBottomTabNavigator();

function BottomNavigationBar() {
    return (
        <Tab.Navigator
            initialRouteName="HomeScreen"
            activeColor="#CACECE"
            style={{ backgroundColor: 'transparent'}}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarColor: '#E5E7E9',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Contacts"
                component={AddressBookScreen}
                options={{
                    tabBarLabel: 'Contacts',
                    tabBarColor: '#E5E7E9',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="contact" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarColor: '#E5E7E9',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cart" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomNavigationBar;