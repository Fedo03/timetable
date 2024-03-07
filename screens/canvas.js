import React, {useEffect, useState} from 'react'

import {
    SafeAreaView,
    Text,
    View
} from 'react-native'

import Button from '../comp/button'
import Card from '../comp/course'

import Icons from '../comp/icons'
import Card from '../comp/course'


const CanvasHome = ({navigatation}) => {
    
    var url = "https://canvas.instructure.com/api/v1/courses?access_token="
    const [token,setToken] = useState("")
    var calen ;
   
    const urls = 'https://ulwazi.wits.ac.za/api/v1'
    const [cou, setCou] = useState([])
    

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
          data.forEach(i => {
            console.log(i.name)
            setCou([...cou , i.name])
          });
           
             
           
        }) 
    })

    function nav(){
        console.log("hello world")
    }

 console.log(cou)
    function refresh() {

        fetch(urls + "/login/oauth2/token", {
            method : "post",
            headers :{

            }
        })

    }
 
    return (
        <SafeAreaView>

            <View>
                <Button txt={<Icons name={"bars"} color={"#0000a5"} size={30}/>} />
                 
            </View>
            <View>
               { cou.map((item)=> {
                return <Card name={item} onClick={nav}/>
               })
               }
            </View>

        </SafeAreaView>
    )
}

export default CanvasHome

