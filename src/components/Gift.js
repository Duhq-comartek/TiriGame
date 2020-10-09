
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Appone from '../screens/Appone';
// import FlastListBasic from './FlastListBasic';

export default class Gift extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLeft}>

                        <Image style={styles.back} source={require('../icon/back.png')}></Image>

                        <Text style={styles.titleLeft}>Quà Của Tôi</Text>
                    </View>

                </View>


                <View style={styles.view1}>
                    <Appone></Appone>
                </View>

            </View>
        );
    }
}









const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: 'white',
        alignSelf: 'center', maxWidth: 305, maxHeight: 700, borderColor: '#C0C0C0', borderWidth: 1, marginTop: 20
    },
    view1: { flex: 1, width: 300, height: 200, marginTop: 10 },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    header: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10
    },
    headerLeft: {
        flexDirection: 'row'
    },
    back: {
        marginTop: 20,
        width: 20,
        height: 20,
        marginLeft: 20
    },
    imga: {
        width: 70, height: 70, margin: 20, borderRadius: 50
    },
    titleLeft: {
        marginTop: 20,
        color: 'black', marginLeft: 80, marginRight: 170, fontWeight: 'bold'
    },
    imgHeaderRight: {
        width: 15,
        height: 15,
        marginLeft: 70, marginRight: 24

    },
    TextStyle: {
        fontSize: 25,
        color: "#000",
        textAlign: 'center',
    },

});
