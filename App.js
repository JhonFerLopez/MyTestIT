/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
*/
 
import 'react-native-gesture-handler';
import React from 'react';
import AppContainer from './src/navigations/AppNavigation';
 
export default function App() {
  return (      
    <AppContainer />
  );
}
 
console.disableYellowBox = true;
