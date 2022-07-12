import React from 'react';
import {
  View,
} from 'react-native';
import { HStack, Text, VStack } from "@react-native-material/core";
import styles from './styles';

import { useApi } from '../../hooks/useFetchApi'
import InfoItem from './infoItem'
import InfoGrafic from './InfoGrafic';


const Info = ({ navigation, route }) => {
  const { codigo } = route.params
  const { fetchData, status } = useApi(codigo)

  if(status){
    return (
      <VStack style={styles.contentItemContainer}>
          <VStack style={styles.itemViewContentInfo}>
            <InfoItem {...fetchData}/>
          </VStack>
          <View style={styles.itemViewContentGrafic}>
            <InfoGrafic {...fetchData}/>
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
