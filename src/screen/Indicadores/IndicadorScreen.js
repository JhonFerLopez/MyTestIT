import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import { Text } from "@react-native-material/core";
import styles from './styles';
import renderItem from './renderItem'
import { useApi } from '../../hooks/useFetchApi'

const IndicadorScreen = ({ navigation, route }) => {
  const { codigo } = route.params
  const { fetchData, status } = useApi(codigo)

  if(status){
    return (
      <View style={{ backgroundColor: '#F2F2F2'}}>
        <View style={styles.headerTitle}>
            <Text style={styles.title}>{fetchData.nombre}</Text> 
        </View>
        <FlatList
            data={fetchData.serie}
            renderItem={(item) => renderItem(item, fetchData.unidad_medida )}
        />
      </View>
    )
  }else{
    return (
      <View style={styles.presentacion}>
        <Text style={styles.presentacionTitle} >INDICADORES</Text>
      </View>
    )
  }
}

export default IndicadorScreen
