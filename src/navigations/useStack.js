import React, {setState} from 'react';
import { View, Image,Dimensions } from 'react-native';
import { Text, Button } from "@react-native-material/core";
import { createStackNavigator  } from '@react-navigation/stack';
import MenuImage from '../components/MenuImage/MenuImage'

import HomeScreen from '../screen/Home/HomeScreen';
import IndicadorScreen from '../screen/Indicadores/IndicadorScreen';
import InfoScreen from '../screen/Info/InfoScreen';

export function useStack() {
    const { width } = Dimensions.get("screen");
    const Stack = createStackNavigator();
    
    const MainNavigator = () => ( 
        <Stack.Navigator initialRouteName='Home' 
          screenOptions={({ navigation }) => ({
            headerLeft: () => <MenuImage onPress={() => {
              navigation.openDrawer();
            }} />,
            headerStyle: { width: '100%', height: 60, position: 'relative' },
            title: <View style={{ width: width-100, height: 42, justifyContent: 'center', alignContent: 'center', }}>
              <Text style={{ justifyContent: 'center', alignContent: 'center' }}>FINANCES</Text>
            </View>,             
            headerTitleStyle: {
              width: '100%',
              top: 10,
              flex: 1,
            },
            presentation: 'modal',
            cardStyle: { backgroundColor: '#fff'},
          })}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Indicador' component={IndicadorScreen} />
          <Stack.Screen name='Info' component={InfoScreen} />
        </Stack.Navigator>
    );
    return{
        MainNavigator
    }
}