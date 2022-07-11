import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  contentItemContainer: {
    flex: 1,
    height: 'auto',
    margin: 3,
    marginBottom: 5,
    //padding: 6,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  itemBorder:{
    width: '2%', 
    height: '100%',
  },
  itemBorder1:{
    backgroundColor: '#00A5FF',
  },
  itemBorder2:{
    backgroundColor: '#0087FF',
  },
  itemViewTitle:{
    width: '72%', 
    height: 'auto', 
    paddingLeft: 8,
    paddingTop: 10,
    paddingBottom: 8,
  },
  viewTitle:{
    color: '#1D1617',
    fontSize:16,
    fontWeight: '700',
    fontFamily: 'lucida grande',
    marginBottom:10,
  },
  viewSubtitle: {
    color: '#7B6F72',
    fontSize:13,
    fontWeight: '600',
    fontFamily: 'lucida grande',
    marginBottom:6,
  },
  itemViewIcons: {
    width: '25%', 
    height: '100%',
  },
  itemViewHstack:{
    width: '100%',
    height: '100%', 
  },
  itemStackView:{
    width: '50%', 
    height: '100%', 
    flex: 1, 
    justifyContent: 'center', 
    alignItems:'center'
  },
  viewInfo: {
    width: '50%', 
    height: '50%',
    color: '#FF9E1F',
  },
  viewNext: {
    width: '70%', 
    height: '70%',
    color: '#FF9E1F',
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
