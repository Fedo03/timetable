import { useRoute } from '@react-navigation/native';
import React from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet
} from 'react-native'

import Card from '../comp/course';

const Course = ({navigation, route}) => {
    
   const {name,key} = route.params
   console.log(name)


     function nav() {
        navigation.navigate('assign', {key : key, name : name} )
     }


    return (
        <SafeAreaView>
            <View>
                <Text style={stl.head}>
                    {name}
                </Text>
            </View>

            <View style={stl.txt}>
            <Card name={"ASSIGNMENT"} onClick={nav} bcolor={"rgb(73, 216, 230)"} /> 
        </View>

        </SafeAreaView>
    )
}

const stl = StyleSheet.create({
    txt : {
        marginLeft: 5,
    
    },
    head : {
        marginLeft: 10,
        fontSize : 25,
        color:"black"
    }
})

export default Course