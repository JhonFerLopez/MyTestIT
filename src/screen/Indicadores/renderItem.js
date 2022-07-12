import React from 'react';
import {
    View,
} from 'react-native';
import { Text, HStack } from "@react-native-material/core";
import styles from './styles';

const renderItem = ({ item, index }, medida) => (
    <HStack style={styles.contentItemContainer}>
        <View style={styles.itemViewTitle} >
            <Text style={styles.viewTitle}>{item.fecha}</Text>
        </View>
        <View style={styles.itemViewPrice}>
            <Text style={styles.viewPrice}>{[(medida == 'Porcentaje') ? '%' : '$'  ]} {item.valor}</Text>
        </View>
    </HStack>
)

export default renderItem