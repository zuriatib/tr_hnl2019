import * as Speech from 'expo-speech';

import {Body, Button, Card, CardItem, Icon, Right, Text, View, Left, Picker} from 'native-base';
import React, {useState} from "react";
import {Alert, ScrollView} from "react-native";

const en = require(`../assets/questions_en.json`);
const de = require(`../assets/questions_de.json`);
const fr = require(`../assets/questions_fr.json`);

const questions = {
    en,
    de,
    fr
};

const ui = {
    changeLanguage: {
        en: 'Change language',
        de: 'Sprache wechseln',
        fr: 'Changer de langue'
    },
    learnMore: {
        en: 'Learn more',
        de: 'Mehr erfahren',
        fr: 'En savoir plus'
    }
}

type AssessmentProps = { indicator: string, questions: string[], language: string }
enum QuestionAnswer {
    YES,
    UNSURE,
    NO
}

const Question: React.FC<{question: string, language: string}> = props => {
    const {question, language} = props;
    const [selected, setSelected] = useState<QuestionAnswer>();

    const getSelectionProps = (value: QuestionAnswer) => ({
        onPress: () => setSelected(value),
        bordered: value !== selected
    })

    return <Card style={{flex: 0, borderColor: 'ccc', borderWidth: 1}}><CardItem header>
        <Body><Text>{question}</Text></Body>
        <Right><Button info onPress={() => Speech.speak(question, {language})}><Icon name="volume-high"/></Button></Right>
    </CardItem>
        <CardItem>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Button {...getSelectionProps(QuestionAnswer.YES)} style={{flex: 2}} iconLeft success><Icon name="checkmark"/><Text>Yes</Text></Button>
                <Button {...getSelectionProps(QuestionAnswer.UNSURE)} style={{flex: 3, marginLeft: 3, marginRight: 3}} iconLeft
                        warning><Icon name="help"/><Text>Unsure</Text></Button>
                <Button {...getSelectionProps(QuestionAnswer.NO)} style={{flex: 2}} iconLeft danger><Icon name="close"/><Text>No</Text></Button>
            </View>
        </CardItem>
    </Card>
}

const Assessment: React.FC<AssessmentProps> = props => {
    const {language, questions} = props;

    return <Card style={{flex: 0, margin: 8}}>
        <CardItem header>
            <Left><Text>{props.indicator}</Text><Button style={{marginLeft: 5}} small transparent onPress={() => Speech.speak(props.indicator, {language})}><Icon name="volume-high"/></Button></Left>
            <Right><Button transparent onPress={() => Alert.alert(props.indicator, "Some more information", )}><Text>{ui.learnMore[language]}</Text><Icon name="information-circle-outline"/></Button></Right>
        </CardItem>
        <CardItem style={{flexDirection: 'column'}}>
            {questions.map((question, index) => <Question language={language} key={index} question={question}/>)}
        </CardItem>
    </Card>
}

const Questionnaire: React.FC = () => {
    const [language, setLanguage] = useState('en');

    return <ScrollView style={{padding: 5}}>
        <Card style={{flex: 0, margin: 8}}>
            <CardItem header>
                <Text>{ui.changeLanguage[language]}</Text>
            </CardItem>
            <CardItem><Picker
                note
                mode="dropdown"
                style={{ width: 120 }}
                selectedValue={language}
                onValueChange={setLanguage}
            >
                <Picker.Item label="English" value="en" />
                <Picker.Item label="Deutsch" value="de" />
                <Picker.Item label="Francais" value="fr" />
            </Picker></CardItem>
        </Card>
        {questions[language].map(assessment => <Assessment language={language} key={assessment.indicator} indicator={assessment.indicator} questions={assessment.questions}/>)}
    </ScrollView>
}

const QuestionScreen: React.FC = () => {
    return <Questionnaire/>
}

export {QuestionScreen}
