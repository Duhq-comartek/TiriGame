// ./screens/Home.js

import React from "react";
import { View, StyleSheet } from "react-native";
import FlastListBasic from '../components/FlastListBasic';

const Home = () => {
    return (
        <View style={styles.center}>

            <FlastListBasic></FlastListBasic>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default Home;