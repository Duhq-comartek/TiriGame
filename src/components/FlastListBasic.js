import React, { Component } from 'react';

import { Text, View, FlatList, StyleSheet, Image } from 'react-native';

export class FlastListItem extends Component {
    state = {}
    render() {

        return (
            <View style={style.a2}>

                <View style={style.a1}>
                    <Image source={{ uri: this.props.items.imageUrl }} style={style.hello}></Image>
                    <View style={style.a3}>
                        <Text style={style.item}>{this.props.items.id}</Text>
                        <Text style={style.item1}>{this.props.items.name}</Text>
                    </View>

                </View>
            </View>
        );

    }
}


export default class FlastListBasic extends Component {
    state = {

    }
    render() {

        let DATA = [{ id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...)  1', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG/800px-Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) c 2', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) ở d dạng nước 3', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG/800px-Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) ở dạng nước 4', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) ở dạng nguyên 5', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG/800px-Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) ở dạng  nước 6', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG/800px-Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) ở dạng ', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg' },
        { id: 'Mua sắm', name: 'Sữa tươi là các loại sữa động vật (bò sữa, dê, cừu...) ở dạng nước 8', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG/800px-Bouteilles_commerce_lait_cru_vache_Aveyron_sud.JPG' },

        ]


        return (
            <View style={style.view2}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <FlastListItem items={item}></FlastListItem>
                    }
                    keyExtractor={(item) => item.id}


                ></FlatList>


            </View>
        );
    }

}
const style = StyleSheet.create(
    {
        a3: { flexDirection: 'column', flex: 1, marginBottom: 1 },
        a2: { flex: 1, flexDirection: 'column', marginTop: 0, marginLeft: 10, marginBottom: 10, backgroundColor: '#F5F5F5' },
        a1: { flex: 1, flexDirection: 'row', backgroundColor: 'white' },
        hello: {
            width: 50, height: 50, marginTop: 8, marginLeft: 16, backgroundColor: 'value', borderRadius: 20,
            borderBottomColor: '#000000',
            borderBottomWidth: 1
        },
        view2: { flex: 1, marginTop: 30 },
        item: {
            marginTop: 10, marginLeft: 20,
            textAlign: 'center',
            width: 90, fontSize: 12, color: 'blue', backgroundColor: '#C0C0C0', borderRadius: 10
        },
        item1: { marginLeft: 18, fontSize: 12, marginTop: 5 },
    }
)



