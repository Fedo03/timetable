import { useRoute } from '@react-navigation/native';
import React from "react";
import {
    View,
    SafeAreaView,
    Text
} from 'react-native'

import Card from '../comp/course';

const Course = ({navigation}) => {
    var route = useRoute()
   // var value = route.params.data ;


     function nav() {
        navigatation.navigate('assign', )
     }


    return (
        <SafeAreaView>
            <View>
                <Text>
                    {""}
                </Text>
            </View>

            <View>
            <Card name={"ASSIGNMENT"} onClick={nav} /> 
        </View>

        </SafeAreaView>
    )
}

export default Course