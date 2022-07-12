import React from 'react';
import {
    View,
} from 'react-native';
import { Text, HStack } from "@react-native-material/core";
import styles from './styles';
import moment from "moment";

const fecha = (fechaParam) => {
    const date = new Date(fechaParam)
    const fecha = moment(date).utc().format('YYYY-MM-DD')
    return fecha
}  


const renderItem = ({ item, index }, medida) => (
    <HStack style={styles.contentItemContainer}>
        <View style={styles.itemViewTitle} >
            <Text style={styles.viewTitle}>{fecha(item.fecha)}</Text>
        </View>
        <View style={styles.itemViewPrice}>
            <Text style={styles.viewPrice}>{[(medida == 'Porcentaje') ? '%' : '$'  ]} {item.valor}</Text>
        </View>
    </HStack>
)

export default renderItem