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
   var value = route.params?.data ;
   console.log(value)


     function nav() {
        navigation.navigate('assign', )
     }


    return (
        <SafeAreaView>
            <View>
                <Text style={{color:"black"}}>
                    {value}
                </Text>
            </View>

            <View style={{marginLeft: 10}}>
            <Card name={"ASSIGNMENT"} onClick={nav} /> 
        </View>

        </SafeAreaView>
    )
}

export default Course