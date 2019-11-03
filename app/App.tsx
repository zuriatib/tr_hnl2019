import {NavigationNativeContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import {AppLoading} from "expo";
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import {HomeScreen} from "./components/HomeScreen";
import {QuestionScreen} from "./components/QuestionScreen";

const Stack = createStackNavigator();

export default function App() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        }).then(() => setReady(true))
    });

    if (!ready) {
        return <AppLoading/>
    }

    return (
        <NavigationNativeContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
                <Stack.Screen name="Question" component={QuestionScreen} options={{title: "Questionnaire"}}/>
            </Stack.Navigator>
        </NavigationNativeContainer>
    );
}
