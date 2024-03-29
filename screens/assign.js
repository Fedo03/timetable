import React, {useEffect, useState} from "react";
import {
    View,
    SafeAreaView,
    Text,
    ScrollView
} from 'react-native'

import Card from "../comp/course";

const Assign = ({navigation, route}) => {
    const [token,setToken] = useState("19417~WLW5V3lMLN6nGna98Qbl9UabKpt0beAT1HT3T9w4AjxP8AOi3uedhH0ZBDp1rVRY")
    const urls = 'https://ulwazi.wits.ac.za/api/v1'
    const {key,name} = route.params
    const [assig, setassig] = useState([{}])

    useEffect(()=> {
     fetch(urls + "/users/self/courses/"+key+"/assignments", {
        method : "GET",
        headers : {
        'Authorization': " Bearer "+ token ,
        }
     }).then((res)=> {
        return res.json()
     }).then((data)=> {
        setassig([])
        data.forEach(info => {
           
            console.log(info)
            
            var newV = { 
                id : info.id,
                name : info.name,
                muted : info.muted,
                a_id : key
            }
                setassig(pre => [...pre, newV])
                console.log(newV)
        });
     })
    },[])

    function nav(item){
        navigation.navigate("ASSIGMENT", {name: item})
    }
    return (
        <SafeAreaView>
            <View>
                <Text style={{color: "black"}}>ASSIGNMENT</Text>
            </View>
            <ScrollView>
            <View>
                {
                    assig.map((item)=> {
                     return   <Card name={item.name} bcolor={"rgb(73, 216, 230)"} onClick={() => nav(item)}/>
                    })
                }
                
            </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Assign