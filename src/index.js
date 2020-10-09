import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import App from './screens/App';
import './index.css'
// import FlastListBasic from './components/FlastListBasic';
import Profile from './components/Profile'
import Gitf from './components/Gift'


const Stack = createStackNavigator();
class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="Gitf"
                        component={Gitf}
                        options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });
