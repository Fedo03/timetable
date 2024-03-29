import React , {useEffect, useState}from "react";
import { SafeAreaView, View,Text , StyleSheet} from "react-native";

const Assignm = ({navigation, route})=>{
    const {name} = route.params
    console.log(name)
    var token = "19417~WLW5V3lMLN6nGna98Qbl9UabKpt0beAT1HT3T9w4AjxP8AOi3uedhH0ZBDp1rVRY"
    const [date, setDate] = useState()
         

    useEffect(()=> {
  fetch("https://ulwazi.wits.ac.za/api/v1/courses/"+name.a_id+"/assignments/"+name.id, {
    method : "GET",
            headers : {
                'Authorization': " Bearer "+ token ,
            }
  }).then((res)=> {
    return res.json()
  }).then((data)=>{
    console.log(data)
    setDate(data)
    console.log("hey")
  })
    }, [])


    return (
        <SafeAreaView>
            <View>
                <Text style={stl.head}>
                    {name.name}
                </Text>
            </View>
            <View>
                <Text>
                    {date.description}
                    </Text> 
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

export default Assignm