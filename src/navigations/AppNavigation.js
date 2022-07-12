import React from 'react';
import {
    Text,
    View,
    Dimensions
} from 'react-native';

import styles from './styles';
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from './Drawer';


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
      const { DrawerStack } = Drawer();
      
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