import React, {useEffect} from 'react'

import {
    SafeAreaView,
    View
} from 'react-native'

import Button from '../comp/button'



const CanvasHome = () => {
    var url = "https://canvas.instructure.com/api/v1/courses?access_token="
    var token = ""
    var z = url + token
    const urls = 'https://ulwazi.wits.ac.za/api/v1/'

    const headers = {
        'Authorization': 'Bearer ' + token,
    }

    useEffect(()=> {

        console.log("1")
     /*   fetch(z).then((res) => {
            console.log("2")
            return res.json()
        }).then((data) => {
            console.log("3")
            console.log(data + " 4")
        }) */

   /*     fetch(urls, {headers}).then((res) => {
            console.log("5")
            return res.json()
        }).then((data) => {
            console.log("6")
            console.log(data + " 7")
        }) */


        fetch('https://ulwazi.wits.ac.za/api/v1/courses', {
            method : "GET",
            headers : {
                'Authorization': " Bearer " ,
            }
        }
        ).then((res)=> {
            return res.json()
        }).then((data) => {
            console.log(data)
        })
    })
 
    return (
        <SafeAreaView>

            <View>
                <Button  />
            </View>

        </SafeAreaView>
    )
}

export default CanvasHome

