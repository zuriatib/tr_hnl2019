import {useNavigation} from "@react-navigation/core";
import MapView from 'react-native-maps';
import {Button, Card, CardItem, Container, Fab, Icon, Text} from 'native-base';
import React from "react";
import {StyleSheet, Linking} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        marginTop: 10
    }
});

const EmergencyScreen: React.FC = () => {
    const navigation = useNavigation();

    return <Container style={styles.container}>
        <Card style={{flex: 1}}>
            <CardItem header style={{backgroundColor: '#F44336'}}>
                <Text style={{color: 'white'}}>Emergency Mode active</Text>
            </CardItem>
            <CardItem>
                <Text>We are tracking your location. The authorities will be automatically informed.</Text>
            </CardItem>
        </Card>

        <Container style={{borderRadius: 10, overflow: "hidden", flex: 3}}>
            <MapView style={{flex: 1}} showsUserLocation={true} followsUserLocation={true}/>
        </Container>
        <Button style={styles.button} danger block onPress={() => Linking.openURL('tel:12345')}><Icon name={"call"}/><Text>Call Authorities</Text></Button>
    </Container>;
};

export {EmergencyScreen}
