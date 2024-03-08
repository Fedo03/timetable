import { useRoute } from '@react-navigation/native';
import React from "react";
import {
    View,
    SafeAreaView,
    Text
} from 'react-native'

import Card from '../comp/course';

const Course = ({navigatation}) => {
    var route = useRoute()
    var value = route.params?data


     function nav() {
        navigatation.navigate('assign')
     }


    return (
        <SafeAreaView>
            <View>
                <Text>
                    {value.name}
                </Text>
            </View>

            <View>
            <Card name={"ASSIGNMENT"} onClick={nav} /> 
        </View>

        </SafeAreaView>
    )
}

export default Course