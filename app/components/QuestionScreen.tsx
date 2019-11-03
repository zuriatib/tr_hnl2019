import * as Speech from 'expo-speech';

import {Body, Button, Card, CardItem, Icon, Right, Text, View, Left} from 'native-base';
import React, {useState} from "react";
import {Alert, ScrollView} from "react-native";

const questions = require('../assets/questions.json');

type AssessmentProps = { indicator: string, questions: string[] }
enum QuestionAnswer {
    YES,
    UNSURE,
    NO
}

const Question: React.FC<{question: string}> = props => {
    const {question} = props;
    const [selected, setSelected] = useState<QuestionAnswer>();

    const getSelectionProps = (value: QuestionAnswer) => ({
        onPress: () => setSelected(value),
        bordered: value !== selected
    })

    return <Card style={{flex: 0, borderColor: 'ccc', borderWidth: 1}}><CardItem header>
        <Body><Text>{question}</Text></Body>
        <Right><Button info onPress={() => Speech.speak(question)}><Icon name="volume-high"/></Button></Right>
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
    return <Card style={{flex: 0, margin: 8}}>
        <CardItem header>
            <Left><Text>{props.indicator}</Text><Button style={{marginLeft: 5}} small transparent onPress={() => Speech.speak(props.indicator)}><Icon name="volume-high"/></Button></Left>
            <Right><Button transparent onPress={() => Alert.alert(props.indicator, "Some more information", )}><Text>Learn More</Text><Icon name="information-circle-outline"/></Button></Right>
        </CardItem>
        <CardItem style={{flexDirection: 'column'}}>
            {props.questions.map((question, index) => <Question key={index} question={question}/>)}
        </CardItem>
    </Card>
}

const Questionnaire: React.FC<{ assessments: AssessmentProps[] }> = props => {
    const {assessments} = props;

    return <ScrollView style={{padding: 5}}>
        {assessments.map(assessment => <Assessment key={assessment.indicator} indicator={assessment.indicator} questions={assessment.questions}/>)}
    </ScrollView>
}

const QuestionScreen: React.FC = () => {
    return <Questionnaire assessments={questions}/>
}

export {QuestionScreen}
