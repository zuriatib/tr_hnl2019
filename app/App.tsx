import {NavigationNativeContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack";
import React from 'react';
import {HomeScreen} from "./components/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationNativeContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
        </Stack.Navigator>
      </NavigationNativeContainer>
  );
}
