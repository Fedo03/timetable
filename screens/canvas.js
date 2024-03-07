import React, {useEffect, useState} from 'react'

import {
    SafeAreaView,
    Text,
    View
} from 'react-native'

import Button from '../comp/button'

import Icons from '../comp/icons'


const CanvasHome = () => {
    
    var url = "https://canvas.instructure.com/api/v1/courses?access_token="
    const [token,setToken] = useState("19417~kRwGTdVynqmV3uRanoQqwUQuymn6B9WzTHBNIIUKlVlklMUyzjQLs8p41L1dLggN")
    var calen ;
   
    const urls = 'https://ulwazi.wits.ac.za/api/v1'
    const [cou, setCou] = useState([])
    const headers = {
        'Authorization': 'Bearer ' + token,
    }

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
            setCou(...cou , i.name)
          });
           
             
           
        }) 
    })

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
                <Button txt={<Icons name={"facebook"} color={"#0000a5"} size={50}/>} />
                 
            </View>
            <View>
               {cou.map((item)=> {
                return <Text style={{color: "black"}}>{item}</Text>
               })
               }
            </View>

        </SafeAreaView>
    )
}

export default CanvasHome

