import React, {setState} from 'react';
import { View } from 'react-native';
import { Text, Button } from "@react-native-material/core";
import { createStackNavigator  } from '@react-navigation/stack';

function SettingsScreen({ navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


export function useStack() {

    const Stack = createStackNavigator();
    
    const MainNavigator = () => ( 
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={SettingsScreen} />
          <Stack.Screen name='Profile' component={ProfileScreen} />
        </Stack.Navigator>
    );
    return{
        MainNavigator
    }
}