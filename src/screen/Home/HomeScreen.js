import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import styles from './styles';
import { Text } from "@react-native-material/core";
import { useApi } from '../../hooks/useFetchApi'
import listIndicador from './listIndicador'

const HomeScreen = ({navigation}) => {
  const { fetchData, status } = useApi()
  delete fetchData['autor'];
  delete fetchData['version'];
  delete fetchData['fecha'];
  
  if(status){
    return (
      <View style={{ backgroundColor: '#F2F2F2'}}>
        {
          [fetchData].map( (result) => {
            var datosList = Object.values(result); 
            return (
              <FlatList
                data={datosList}
                renderItem={(item) => listIndicador(item, navigation )}
              />
            )        
          })
        }
      </View>
    )
  }else{
    return (
      <View style={styles.presentacion}>
        <Text style={styles.presentacionTitle} >FINANCES</Text>
      </View>
    )
  }
}
export default HomeScreen
