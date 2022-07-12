import React from 'react';
import { Image } from 'react-native';
import styles from './styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Stack } from './Stack';


export function Tabs() {
    const Tab = createMaterialBottomTabNavigator();
    const { MainNavigator } = Stack();
    const navOptionHandler = () => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
            <Image style={styles.tabView} source={require('../assets/icons/menu.png')} resizeMode='contain'/>
        )
    })

    const MyTab = () => (
        <Tab.Navigator 
            initialRouteName="Home"
            activeColor="#000000"
            inactiveColor="#000000"
            barStyle={{ backgroundColor: '#FFF', padding: 5 }}
        >
            <Tab.Screen name="Inicio" component={MainNavigator} options={navOptionHandler} />   
        </Tab.Navigator>
    );
    return {
        MyTab
    }
}