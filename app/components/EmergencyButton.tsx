import {useNavigation} from "@react-navigation/core";
import {Fab, Icon} from "native-base";
import React from "react";

const EmergencyButton: React.FC = () => {
    const navigation = useNavigation();

    return <Fab style={{backgroundColor: 'red'}} onPress={() => navigation.navigate('Emergency')}>
        <Icon name={"warning"}/>
    </Fab>
}

export {EmergencyButton}
