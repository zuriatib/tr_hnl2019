import {Button, Card, CardItem, Icon, Text} from "native-base";
import React from "react";
import {Linking, StyleSheet, View} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        marginTop: 10
    }
})

const ResultScreen: React.FC = () => {
    return <View style={styles.container}>
        <Card style={{flex: 1}}>
            <CardItem header style={{backgroundColor: '#F44336'}}>
                <Text style={{color: 'white'}}>Suspicious Situation</Text>
            </CardItem>
            <CardItem>
                <Text>Based on your answer we have determined this situation to be suspicious. You should contact the authorities and provide them with details.</Text>
            </CardItem>
        </Card>
        <Card style={{flex: 1}}>
            <CardItem header>
                <Text style={{fontSize: 40}}>Danger Score</Text>
            </CardItem>
            <CardItem>
                <Text style={{fontSize: 60, color: '#F44336'}}>60%</Text>
            </CardItem>
        </Card>
        <Button style={styles.button} danger block onPress={() => Linking.openURL('tel:12345')}><Icon name={"call"}/><Text>Call Authorities</Text></Button>
    </View>
}

export {ResultScreen}
