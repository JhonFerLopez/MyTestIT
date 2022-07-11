import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';

import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { useDrawer } from './useDrawer';


export default class AppContainer extends React.Component {
  
    constructor(props) {
      super(props);
      const { navigation } = this.props;
      this.state = {
        loading: true,
      }
    }  
    
    render() {
      const { width } = Dimensions.get("screen");
      const { DrawerStack } = useDrawer();
      
      if(this.state.loading){
        
        return(
            <NavigationContainer>
                <DrawerStack/>
            </NavigationContainer>
        )
      }else{
        return (
          <View style={styles.presentacion}>
            <Text style={styles.presentacionTitle} >FINANCES</Text>
          </View>
        )
      }    
    }
  }