import React, {useState, useEffect} from 'react';
import {
  FlatList,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import { HStack, Text, VStack } from "@react-native-material/core";
import styles from './styles';

export default class Info extends React.Component {
  
  constructor(props) {
    super(props);
    const { navigation , route } = this.props    
    this.state = {
        nombre: '',
        medida : '',
        listData: [],
        isLoaded: false,
        url: 'https://mindicador.cl/api/'
    }
  }
  
  componentDidMount(){
    this.getIndicador(this.props.route.params.item.codigo);
  }

  getIndicador = (codigo) => {   
    fetch(this.state.url+codigo)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        nombre: res.nombre,
        medida: res.unidad_medida,
        listData: res.serie,        
        isLoaded: true,
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  
  renderContent = ({ item, index }) => (
    <HStack style={styles.contentItemContainer}>
        <View style={styles.itemViewTitle} >
            <Text style={styles.viewTitle}>{item.fecha}</Text>
        </View>
        <View style={styles.itemViewPrice}>
            <Text style={styles.viewPrice}>{[(this.state.medida == 'Porcentaje') ? '%' : '$'  ]} {item.valor}</Text>
        </View>
      </HStack>
    
  );

  render() { 
    const { listData, medida, nombre } = this.state;

    if(this.state.isLoaded){
      return (
        <VStack style={styles.contentItemContainer}>
          <VStack style={styles.itemViewContent}>
            <View style={styles.itemTitle}>
              <Text style={styles.itemPrice}>{[(medida == 'Porcentaje') ? '%' : '$'  ]} {listData[0].valor}</Text>
            </View>
            <HStack style={styles.itemInfo}>
                <Text style={styles.textLabel}>Nombre</Text>
                <Text style={styles.textTitle}>{nombre}</Text>           
            </HStack>
            <HStack style={styles.itemInfo}>
                <Text style={styles.textLabel}>Fecha</Text>
                <Text style={styles.textTitle}>{listData[0].fecha}</Text>           
            </HStack>
            <HStack style={styles.itemInfo}>
                <Text style={styles.textLabel}>Unidad de Medida</Text>
                <Text style={styles.textTitle}>{medida}</Text>           
            </HStack>
          </VStack>
          <View style={styles.itemViewContent}>
            <Text style={styles.viewTitle}>{listData[0].fecha}</Text>
          </View>
        </VStack>
      );
    }else {
      return (
        <View style={styles.presentacion}>
          <Text style={styles.presentacionTitle} >INDICADORES</Text>
        </View>
      )
    }
  }
}
