import React, {useState} from 'react'

import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions

} from 'react-native'
import { Screen } from 'react-native-screens'



const Card = (props) => {
      
    


    function cards() {

    
    if(props.card == "cards") {
        return (

            <TouchableOpacity onPress={props.onClick}>
        <View style={stl.con}>
       
                <Text style={stl.txt}>
                {props.name}
                </Text>

               
        </View> 
       
        </TouchableOpacity>

        )
    } else {
        return (<TouchableOpacity onPress={props.onClick}>
            <View style={stl.hor}>
               <View style={{backgroundColor : props.bcolor , height : "100%",borderRadius : 10}}>
                    <Text style={stl.txt}>
                    {props.name}
                    </Text>
                    </View> 
                
            </View>
            </TouchableOpacity>)
    }
        
    }

    return (
        <SafeAreaView>
            <View>{
                cards()
            }</View>
               


    
        </SafeAreaView>

    )
}

const stl = StyleSheet.create({
    con : {
        width : Dimensions.get("screen").width/2,
        height : Dimensions.get("screen").height/3,
        backgroundColor : "rgb(73, 216, 230)",
        marginTop : 10,
        borderRadius : 10

    },
    hor : {
        width : Dimensions.get("screen").width - 20,
        height : 50,
        
        marginTop : 10,
        borderRadius : 10
    },
    txt : {
        color : "black",
        marginLeft : 20
        
    
    }
})

export default Card