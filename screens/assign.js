import React, {useEffect} from "react";
import {
    View,
    SafeAreaView,
    Text
} from 'react-native'

const Assign = ({navigation, route}) => {
    const [token,setToken] = useState("19417~d1zieLtOtyOEYKaQpdkROpHd3R2Qi5avV9KpL5OCOtL6aN1NyygQAOW9FeundIdy")
    const urls = 'https://ulwazi.wits.ac.za/api/v1'
    const {key,name} = route.params

    useEffect(()=> {
     fetch(urls + "users/self/courses/"+key+"/assignments", {
        'Authorization': " Bearer "+ token ,
     }).then((res)=> {
        return res.json()
     }).then((data)=> {
        console.log(data)
     })
    },[])
    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

export default Assign