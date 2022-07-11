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

export default class HomeScreen extends React.Component {
  
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    this.state = {
      listData: [],
      isLoaded: false,
      url: 'https://mindicador.cl/api'
    }
  }
  
  componentDidMount(){
    this.getHome();
  }

  getHome = () => {
    fetch(this.state.url)
    .then( res => res.json() )
    .then( res => {
      this.setState({
        listData: res,
        isLoaded: true,
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  onPressContent = item => {
    this.props.navigation.navigate('Indicador', { item });
  };
  onPressInfo = item => {
    //this.props.navigation.navigate('Indicador', { item });
    console.log('info');
  };
  
  renderContent = ({ item, index }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' onPress={() => this.onPressContent(item)}>
      <HStack style={styles.contentItemContainer}>
        <View style={[styles.itemBorder, (index % 2) == 0 ? styles.itemBorder1 : styles.itemBorder2]} >
        </View>
        <View style={styles.itemViewTitle} >
          <Text style={styles.viewTitle}>{item.nombre}</Text>
          <Text style={styles.viewSubtitle}>{item.unidad_medida}</Text>
        </View>
        <View style={styles.itemViewIcons}>
          <HStack style={styles.itemViewHstack}>
            <TouchableHighlight underlayColor='rgba(73,182,77,0.0)' style={styles.itemStackView} onPress={() => this.onPressInfo(item)}>
                <Image style={styles.viewInfo} source={require('../../assets/icons/info.png')} resizeMode='contain'/>
            </TouchableHighlight>
            <View style={styles.itemStackView} >
              <Image style={styles.viewNext} source={require('../../assets/icons/right-arrow.png')} resizeMode='contain'/>
            </View>
          </HStack>
        </View>
      </HStack>
    </TouchableHighlight>
  );

  render() {  

    if(this.state.isLoaded){
      delete this.state.listData['autor'];
      delete this.state.listData['version'];
      delete this.state.listData['fecha'];

      return (
          <View style={{ backgroundColor: '#F2F2F2'}}>
            {
              [this.state.listData].map( (result) => {
                var datosList = Object.values(result); 
                return (
                  <FlatList
                    data={datosList}
                    renderItem={this.renderContent}
                    keyExtractor={item => `${item.codigo}`}
                  />
                )        
              })
            }
          </View>
      );
    }else {
      return (
        <View style={styles.presentacion}>
          <Text style={styles.presentacionTitle} >FINANCES</Text>
        </View>
      )
    }
  }
}
