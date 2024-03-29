import React , {useEffect, useState}from "react";
import { SafeAreaView, View,Text , StyleSheet, ScrollView, useWindowDimensions} from "react-native";
import HTML from "react-native-render-html"

//const {height, width, scale, fontScale} = useWindowDimensions();

const Assignm = ({navigation, route})=>{
    const {height, width, scale, fontScale} = useWindowDimensions();

    const {name} = route.params
    console.log(name)
    var token = "19417~WLW5V3lMLN6nGna98Qbl9UabKpt0beAT1HT3T9w4AjxP8AOi3uedhH0ZBDp1rVRY"
    const [date, setDate] = useState()
    const [desc, setDesc] = useState()
    const [due, setDue] = useState()
         

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
    console.log(data.description)
    setDesc(data.description)
    setDue(data.due_at)
  })
    }, [])
    

  
    return (
        <SafeAreaView>
            <View>
                <Text style={stl.head}>
                    {name.name}
                </Text>
            </View>
            <ScrollView>
            <View style={stl.txt}>
                <Text>{due}</Text>
               { <HTML source={{html : desc}} style={{height : height, width : height}}/>
               }
                    </View>
                    </ScrollView>

            <View>
                <Text title={"buttom"}>
                    
                </Text>
            </View>
 
        </SafeAreaView>
    )
}


const stl = StyleSheet.create({
    txt : {
        marginTop: 10,
        marginLeft : 3
    
    },
    head : {
        marginLeft: 10,
        fontSize : 25,
        color:"black"
    },
    html : {
       // width : useWindowDimensions().width,
     //   height : useWindowDimensions().height

    }
})

export default Assignm