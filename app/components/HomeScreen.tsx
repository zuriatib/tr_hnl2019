import {useNavigation} from "@react-navigation/core";
import {Button, Container, Text} from 'native-base';
import React from "react";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    return <Container style={styles.container}>
        <Button block onPress={() => navigation.navigate('Question')}><Text>Assess a situation</Text></Button>
    </Container>;
};

export {HomeScreen}
