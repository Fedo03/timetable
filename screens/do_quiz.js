import React, { useEffect, useState } from "react";
import { SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
  View,
  useWindowDimensions
 } from "react-native";
 import HTML from "react-native-render-html"
import Button from "../comp/button";

 const DoQuiz = ({navigation, route}) => {
    const {height, width, scale, fontScale} = useWindowDimensions();

       var {info} = route.params
       console.log(info)
       const [tm, setTm] = useState()
       const [la, setLa] = useState()
       const [a, seta] = useState() 

       var token = "19417~RFZirwoF2CjuqbYGJ1BNYvSiVX3RBbt7x5XK9xzxa78ieOv2RNLsvpPpmmcs5q52"
        const [dis, setDis] = useState()
      
       useEffect(()=> {

        fetch("https://ulwazi.wits.ac.za/api/v1/courses/"+info.c_id+"/quizzes/"+info.id, {
            method : "GET",
                    headers : {
                        'Authorization': " Bearer "+ token ,
                    }
       }).then((res)=> {
        return res.json();
       }).then((data)=> {
       

        
            setTm("time limit : " + data.time_limit + " min") 
            setLa("lock at : " + data.lock_at)
            seta("attempts : " + data.allowed_attempts) 
      
           console.log(data)
                setDis(data.description)
                  console.log(data.description)
       })

       },[])

       console.log("hello")
    console.log(la)
    
    return (
        <SafeAreaView>
            <View>
                <Text>
                    {info.name}
                </Text>
            </View>
    
            <View>
                
         
             <Text>{tm}</Text>
            <Text>{la}</Text>
            <Text>{a}</Text>
            </View>

            <View>
            <HTML source={{html : dis} } style={{height : height, width : height}}/>
            </View>

            <View><Button txt="Take quiz" tst={stl.butt}/>
                </View>
        </SafeAreaView>
    )
 }


 const stl =  StyleSheet.create({
    butt : {
      color : "white",
      backgroundColor : "blue"
    }
 })

 export default DoQuiz