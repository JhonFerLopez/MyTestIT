import React from 'react';
import { ScrollView, View, Dimensions } from 'react-native';
import {
    LineChart
} from "react-native-chart-kit";
import moment from "moment";



const InfoGrafic = (props) => {
    const width = Dimensions.get("window").width * 2
    const height = Dimensions.get("window").height / 2
    var simbolo = [(props.unidad_medida == 'Porcentaje') ? '%' : '$' ]
    var separador = [(props.unidad_medida == 'Porcentaje') ? '' : 'k' ]
    var label = []
    var datos = []
    props.serie.slice(0, 10).map( (result) => {
        var date = new Date(result.fecha)
        var fecha = moment(date).utc().format('YYYY-MM-DD')
        var val = result.valor
        label.push(fecha)
        datos.push(val)      
    })
    
    return (
        <View>
            <ScrollView  horizontal={true} > 
            <LineChart
                data={{
                labels: label,
                datasets: [
                    {
                    data: datos,
                    strokeWidth: 3
                    }
                ]
                }}
                width={width} // from react-native
                height={height}
                yAxisLabel={simbolo}
                yAxisSuffix={separador}
                yAxisInterval={4} // optional, defaults to 1
                chartConfig={{
                backgroundColor: "#05C1C1",
                backgroundGradientFrom: "#00D8DE",
                backgroundGradientTo: "#05C1C1",
                decimalPlaces: 1, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    padding: 10,
                    borderRadius: 16
                },
                propsForDots: {
                    r: "7",
                    strokeWidth: "2",
                    stroke: "#00D8DE"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16
                }}
            />
            </ScrollView >
        </View>
    )
}

export default InfoGrafic