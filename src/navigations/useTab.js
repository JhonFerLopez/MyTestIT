import React, {setState} from 'react';
import styles from './styles';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useStack } from './useStack';


export function useTabs() {
    const Tab = createMaterialBottomTabNavigator();
    const { MainNavigator } = useStack();
    const navOptionHandler = () => ({
        headerShown: false
    })

    const MyTab = () => (
        <Tab.Navigator >
            <Tab.Screen name="Inicio" component={MainNavigator} options={ navOptionHandler }/>
        </Tab.Navigator>
    );
    return {
        MyTab
    }
}