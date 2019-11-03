import {useNavigation} from "@react-navigation/core";
import {EmergencyButton} from "./EmergencyButton";
import {Button, Container, Icon, Text} from 'native-base';
import React from "react";
import {StyleSheet, Image, View} from "react-native";
import { BlurView } from 'expo-blur';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        marginBottom: 10
    },
    background: {
        // @ts-ignore
        ...StyleSheet.absoluteFill
    },
    blurredImage: {
        flex: 1,
        resizeMode: 'cover',
    }
});

const HomeScreen: React.FC = () => {
    const navigation = useNavigation();

    return <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <Image style={styles.blurredImage} source={require('../assets/background.jpg')} />
        <BlurView tint="dark" intensity={60} style={styles.background}>
            <Container style={styles.container}>
                <Button style={styles.button} iconLeft block danger onPress={() => navigation.navigate('Report')}><Icon name={"warning"}/><Text>Report a case</Text></Button>
                <Button style={styles.button} iconLeft block onPress={() => navigation.navigate('Question')}><Icon name={"eye"}/><Text>Assess a situation</Text></Button>
                <Button style={styles.button} iconLeft block info onPress={() => navigation.navigate('Information')}><Icon name={"information-circle"}/><Text>Get informed</Text></Button>
                <EmergencyButton/>
            </Container>
        </BlurView>
    </View>;
};

export {HomeScreen}
