import { ImageBackground, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  tabView : {
    width: 30,
    height: 30,
  },
  presentacion:{
    width: width,
    height: height,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  presentacionTitle: {
    fontSize: 20,
    fontWeight: '800',
  }

});

export default styles;
