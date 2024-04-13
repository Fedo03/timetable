import React, { useEffect, useState } from "react";
import { SafeAreaView,
    ScrollView,
    Text,
  View
 } from "react-native";

 const DoQuiz = ({navigation, route}) => {

       var {info} = route.params
       console.log(info)

       var token = "19417~zicb8nnlJTtMV7TuDIvICHFw4r3ZjnKk4tJd52s7ErlS85uelaK5wqa38rYlg2eZ"
        const [dis, setDis] = useState([])
       useEffect(()=> {

        fetch("https://ulwazi.wits.ac.za/api/v1/courses/"+info.c_id+"/quizzes/"+info.id, {
            method : "GET",
                    headers : {
                        'Authorization': " Bearer "+ token ,
                    }
       }).then((res)=> {
        return res.json();
       }).then((data)=> {
        console.log(data)
       
       })

       },[])



    return (
        <SafeAreaView>
            <View>
                <Text>
                    {info.name}
                </Text>
            </View>
            <View>
                {

                }
            </View>

        </SafeAreaView>
    )
 }

 export default DoQuiz