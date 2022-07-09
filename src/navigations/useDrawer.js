import React, {setState} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTabs } from './useTab';

function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
}

export function useDrawer() {

    const Drawer = createDrawerNavigator();
    const { MyTab } = useTabs();
    const navOptionHandler = () => ({
        headerShown: false
    })
    
    const DrawerStack = () => (
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={ MyTab } options={ navOptionHandler }/> 
        </Drawer.Navigator>
    );

    return{
        DrawerStack
    }
}