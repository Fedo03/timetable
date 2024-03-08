import React, {useEffect, useState} from 'react'

import {
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native'

import Button from '../comp/button'
import Card from '../comp/course'

import Icons from '../comp/icons'



const CanvasHome = ({navigation}) => {
    
    var url = "https://canvas.instructure.com/api/v1/courses?access_token="
    const [token,setToken] = useState("")
    var calen ;
   
    const urls = 'https://ulwazi.wits.ac.za/api/v1'
    const [cou, setCou] = useState([{}])
    

    useEffect(()=> {

        
    


        fetch(urls +'/users/self/courses', {
            method : "GET",
            headers : {
                'Authorization': " Bearer "+ token ,
            }
        }
        ).then((res)=> {
            return res.json()
        }).then((data) => {
            setCou([])
          data.forEach(i => {
            if(i.name){
                var newV = {
                    key: i.id,
                    name : i.name
                }
            console.log(i.name)
            setCou(pre => [...pre , newV])
            }
          });
        
           
        
           
        }) 
    },[])

    function nav(item){
        console.log("hello world")
        navigation.navigate('course', {data : item})
    }
console.log("hello world")
 console.log(cou)

    function refresh() {

        fetch(urls + "/login/oauth2/token", {
            method : "post",
            headers :{
                'grant_type' : refresh_token,
                
                'Authorization': " Bearer "+ token ,
            }
        })

    }
 
    return (
        <SafeAreaView>
            <ScrollView>
            <View>
                <Button txt={<Icons name={"bars"} color={"#0000a5"} size={30}/>} onClick={refresh}/>
                 
            </View>
            <View style={{paddingLeft : 10, paddingTop : 10}}>
               { cou.map((item)=> {
                return <Card name={item.name} onClick={nav(item)} cards={"cards"}/>
               })
               }
            </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default CanvasHome

