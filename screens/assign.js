import React, {useEffect, useState} from "react";
import {
    View,
    SafeAreaView,
    Text
} from 'react-native'

import Card from "../comp/course";

const Assign = ({navigation, route}) => {
    const [token,setToken] = useState("19417~d1zieLtOtyOEYKaQpdkROpHd3R2Qi5avV9KpL5OCOtL6aN1NyygQAOW9FeundIdy")
    const urls = 'https://ulwazi.wits.ac.za/api/v1'
    const {key,name} = route.params
    const [assig, setAssig] = useState([])
    useEffect(()=> {
     fetch(urls + "/users/self/courses/"+key+"/assignments", {
        method : "GET",
        headers : {
        'Authorization': " Bearer "+ token ,
        }
     }).then((res)=> {
        return res.json()
     }).then((data)=> {
        
        data.forEach(info => {
            var newV = { 
                id : info.id,
                name : info.name,
                muted : info.muted
               
            }
                setAssig(old => [...old, newV])
        });
     })
    },[])
    return (
        <SafeAreaView>
            <View>
                <Text style={{color: "black"}}>ASSIGNMENT</Text>
            </View>
            <View>
                {
                    assig.map((item)=> {
                        <Card name={item.name} bcolor={"rgb(73, 216, 230)"} />
                    })
                }
                
            </View>

        </SafeAreaView>
    )
}

export default Assign