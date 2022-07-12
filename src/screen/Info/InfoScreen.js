import React from 'react';
import {
  View,
} from 'react-native';
import { HStack, Text, VStack } from "@react-native-material/core";
import styles from './styles';
import InfoItem from './infoItem'
import { useApi } from '../../hooks/useFetchApi'


const Info = ({ navigation, route }) => {
  const { codigo } = route.params
  const { fetchData, status } = useApi(codigo)

  if(status){
    return (
      <VStack style={styles.contentItemContainer}>
          <VStack style={styles.itemViewContent}>
            <InfoItem {...fetchData}/>
          </VStack>
          <View style={styles.itemViewContent}>
            <Text style={styles.viewTitle}>{fetchData.serie[0].fecha}</Text>
          </View>
        </VStack>
    )
  }else{
    return (
      <View style={styles.presentacion}>
        <Text style={styles.presentacionTitle} >INFO INDICADORES</Text>
      </View>
    )
  }
}

export default Info
