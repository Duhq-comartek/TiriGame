

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

import Contact from "../screens/Contact";

const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

const ContactStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Contact" component={Contact} />
        </Stack.Navigator>
    );
};

export { MainStackNavigator, ContactStackNavigator };