import React from 'react';
import {
    View,
    Image,
    TouchableHighlight,
  } from 'react-native';
  import { Text, HStack } from "@react-native-material/core";
  import styles from './styles';
  
  const onPressContent = (item, prop) => {
    prop.navigate('Indicador', { codigo : item.codigo })
  };
  const onPressInfo = (item, prop) => {
    prop.navigate('Info', { codigo : item.codigo })
  };
  
  const listIndicador = ({ item, index }, prop) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => onPressContent(item, prop)}>
      <HStack style={styles.contentItemContainer}>
        <View style={[styles.itemBorder, (index % 2) == 0 ? styles.itemBorder1 : styles.itemBorder2]} >
        </View>
        <View style={styles.itemViewTitle} >
          <Text style={styles.viewTitle}>{item.nombre}</Text>
          <Text style={styles.viewSubtitle}>{item.unidad_medida}</Text>
        </View>
        <View style={styles.itemViewIcons}>
          <HStack style={styles.itemViewHstack}>
            <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' style={styles.itemStackView} onPress={() => onPressInfo(item, prop)}>
                <Image style={styles.viewInfo} source={require('../../assets/icons/info.png')} resizeMode='contain'/>
            </TouchableHighlight>
            <View style={styles.itemStackView} >
              <Image style={styles.viewNext} source={require('../../assets/icons/right-arrow.png')} resizeMode='contain'/>
            </View>
          </HStack>
        </View>
      </HStack>
    </TouchableHighlight>
  )
  export default listIndicador