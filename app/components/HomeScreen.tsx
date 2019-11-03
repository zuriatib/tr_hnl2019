import {Container, Text} from 'native-base';
import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const HomeScreen: React.FC = () => <Container style={styles.container}>
    <Text>Open up App.tsx to start working on your app!</Text>
</Container>;

export {HomeScreen}
