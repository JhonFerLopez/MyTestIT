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
import { Text, HStack } from "@react-native-material/core";
import styles from './styles';

export default class IndicadorScreen extends React.Component {
  
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
    if(this.state.isLoaded){
      return (
          <View style={{ backgroundColor: '#F2F2F2'}}>
            <View style={styles.headerTitle}>
               <Text style={styles.title}>{this.state.nombre}</Text> 
            </View>
            <FlatList
                data={this.state.listData}
                renderItem={this.renderContent}
                keyExtractor={item => `${item.valor}`}
            />
          </View>
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
