import { useRoute } from '@react-navigation/native';
import React, {useState} from "react";
import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import Card from '../comp/course';

const Course = ({navigation, route}) => {
    const [ops , setOps] = useState(["ASSIGNMENTS","FILES", "GRADES","MODULES", "PEOPLE","PAGES", "QUIZ"])
   const {name,key} = route.params
   console.log(name)


     function nav(item) {
        navigation.navigate(item, {key : key, name : name} )
     }


    return (
        <SafeAreaView>
            <View>
                <Text style={stl.head}>
                    {name}
                </Text>
            </View>
            <ScrollView>
            <View style={stl.txt}>
                {
                    ops.map((item) =>{
           return <Card name={item} onClick={() => nav(item)} bcolor={"rgb(73, 216, 230)"} /> 
        })}
        </View>
        </ScrollView>


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