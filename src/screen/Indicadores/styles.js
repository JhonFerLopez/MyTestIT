import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    headerTitle: {
        height: 'auto',
        marginBottom: 2,
        padding: 10,
        backgroundColor: '#FFF', 
        justifyContent: 'center', 
        alignItems:'center',
        borderBottomColor: '#FFF',
        borderBottomWidth: 3,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    title:{
        color: '#1D1617',
        fontSize:18,
        fontWeight: '700',
        fontFamily: 'lucida grande',
        letterSpacing: 0.55,
    },
    contentItemContainer: {
        flex: 1,
        height: 'auto',
        margin: 3,
        marginBottom: 2,
        padding: 6,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#FFF',
        borderRadius: 10,
        justifyContent: 'center', 
        alignItems:'center',
    },
    itemViewTitle:{
        width: '70%', 
        height: 'auto', 
        paddingLeft: 8,
    },
    viewTitle:{
        color: '#1D1617',
        fontSize:16,
        fontWeight: '700',
        fontFamily: 'lucida grande',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemViewPrice: {
        width: '30%', 
        height: '100%',
        justifyContent: 'center',
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
