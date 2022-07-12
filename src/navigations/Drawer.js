import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Tabs } from './Tabs';

export function Drawer() {

    const Drawer = createDrawerNavigator();
    const { MyTab } = Tabs();
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