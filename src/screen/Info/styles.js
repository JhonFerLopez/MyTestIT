import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    contentItemContainer: {
        height: '100%',
        backgroundColor: '#FFF',
        borderColor: 'red',
        borderWidth: 2,        
    },
    itemViewContent:{
        width: '100%', 
        height: '50%', 
        padding: 8,
        //justifyContent:'center'   
    },
    itemTitle:{
        padding: 20,
    },  
    itemPrice: {
        color: '#0087FF',
        fontSize:26,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'lucida grande',
    },  
    itemInfo:{
        width: '100%', 
        height:'auto',
        padding:10, 
    },
    textLabel:{
        color: '#1D1617',
        fontSize: 15,
        fontWeight: '700',
        fontFamily: 'lucida grande',
        width: '50%',
    },
    textTitle: {
        color: '#1D1617',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'lucida grande',
        width: '50%',
        textAlign:'right',
    },


    viewPrice:{
        color: '#7B6F72',
        fontSize:14,
        fontWeight: '600',
        fontFamily: 'lucida grande',
        textAlign: 'right',
        paddingRight: 10,
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
