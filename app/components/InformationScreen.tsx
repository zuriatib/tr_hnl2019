import {useNavigation} from "@react-navigation/core";
import {Card, CardItem, Button, Icon, Text} from 'native-base';
import React from "react";
import {ScrollView, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        marginBottom: 10
    }
});

const InformationScreen: React.FC = () => {
    const navigation = useNavigation();

    // const { navigation } = this.props;
    const language = 'en';

    const buttons = {
        report: {
            en: 'Report a case',
            de: 'Einen Fall melden',
            fr: 'Signaler un cas'
        },
        Suport: {
            en: 'Support Us',
            de: 'Unterstütze uns',
            fr: 'Nous soutenir'
        },
        Donate: {
            en: 'Donate',
            de: 'Spenden',
            fr: 'Faire un don'
        },
        SocialNetwork: {
            en: 'Spread the word',
            fr: 'Faire connaitre',
            de: 'Verbreite das Wort'
        }
    }

    return <ScrollView contentContainerStyle={styles.container}>
        <Card>
            <CardItem header>
                <Text>Indicators of forced labor</Text>
            </CardItem>
            <CardItem>
                <Card>
                    <CardItem><Text>1. Retention of identity documents </Text></CardItem>
                    <CardItem><Text>2. Excessive overtime </Text></CardItem>
                    <CardItem><Text>3. Abuse of vulnerability </Text></CardItem>
                    <CardItem><Text>4. Isolation</Text></CardItem>
                    <CardItem><Text>5. Withholding of wages</Text></CardItem>
                    <CardItem><Text>6. Abusive working and living conditions</Text></CardItem>
                    <CardItem><Text>7. Deception</Text></CardItem>
                    <CardItem><Text>8. Restriction of movement</Text></CardItem>
                    <CardItem><Text>9. Physical and sexual violence</Text></CardItem>
                    <CardItem><Text>10. Intimidation and threats </Text></CardItem>
                    <CardItem><Text>11. Debt bondage</Text></CardItem>
                </Card>
            </CardItem>
        </Card>
        <Button style={styles.button} iconLeft block danger onPress={() => navigation.navigate('Report')}><Icon name={"warning"}/><Text>Report a case</Text></Button>
        <Button style={styles.button} iconLeft block success onPress={() => navigation.navigate('Report')}><Icon name={"cash"}/><Text>Donate</Text></Button>
        <Button style={styles.button} iconLeft block info onPress={() => navigation.navigate('Report')}><Icon name={"chatbubbles"}/><Text>Spread the word</Text></Button>
    </ScrollView>;
};

export {InformationScreen}
