import React from 'react';
import {
  View,
} from 'react-native';
import { HStack, Text } from "@react-native-material/core";
import styles from './styles';
import moment from "moment";

const InfoItem = (props) => {
    const date = new Date(props.serie[0].fecha)
    const fecha = moment(date).utc().format('YYYY-MM-DD')

    return (
        <View>
            <View style={styles.itemTitle}>
              <Text style={styles.itemPrice}>{[(props.unidad_medida == 'Porcentaje') ? '%' : '$'  ]} {props.serie[0].valor}</Text>
            </View>
            <HStack style={styles.itemInfo}>
                <Text style={styles.textLabel}>Nombre</Text>
                <Text style={styles.textTitle}>{props.nombre}</Text>           
            </HStack>
            <HStack style={styles.itemInfo}>
                <Text style={styles.textLabel}>Fecha</Text>
                <Text style={styles.textTitle}>{fecha}</Text>           
            </HStack>
            <HStack style={styles.itemInfo}>
                <Text style={styles.textLabel}>Unidad de Medida</Text>
                <Text style={styles.textTitle}>{props.unidad_medida}</Text>           
            </HStack>
        </View>
    )
}

export default InfoItem