import React, {useEffect, useState} from "react";
import { SafeAreaView,
View,
Text, 
ScrollView} from "react-native";
import Card from "../comp/course";

const Quiz = ({navigation, route}) => {
    var token = "19417~RFZirwoF2CjuqbYGJ1BNYvSiVX3RBbt7x5XK9xzxa78ieOv2RNLsvpPpmmcs5q52"
    const {key,name} = route.params
    const [info,setInfo] = useState([{}])

    useEffect(()=> {
        fetch("https://ulwazi.wits.ac.za/api/v1/courses/"+key+"/quizzes", {
          method : "GET",
                  headers : {
                      'Authorization': " Bearer "+ token ,
                  }
        }).then((res)=> {
          return res.json()
        }).then((data)=>{
 
          setInfo([])
       data.forEach(inf => {
        
         var sdata  ={
            c_id : key,
            name : inf.title,
            id : inf.id,

          }
          setInfo(pre => [...pre, sdata])
       })
         
        })

       console.log(info)
          }, [])


          function nav(item) {
            navigation.navigate("Task", {info : item})
          }
    return ( 
        <SafeAreaView>

 <ScrollView>
    <View  style={{paddingLeft : 10, paddingTop : 10}}>{
        info.map((item)=> {
            return <Card name={item.name} bcolor={"rgb(73, 216, 230)"} onClick={() => nav(item)} />
        })
    }
    </View>
 </ScrollView>
        </SafeAreaView>
    )
}


export default Quiz