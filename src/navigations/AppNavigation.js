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
            <SettingsScreen />
            <Image style={styles.fontPhoto} source={{ uri: 'https://app-innopolitica.com.co/wp-content/uploads/2021/10/innopoliticaLogo.png' }} />
            <Image style={styles.logoPhoto} source={{ uri: 'https://app-innopolitica.com.co/wp-content/uploads/2021/10/innopoliticaLogo.png' }} />
          </View>
        )
      }    
    }
  }