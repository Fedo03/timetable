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
      
    const [card, setCard] = useState(false)


    function cards() {

    
    if(props.cards == "card") {
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
            
                    <Text style={stl.txt}>
                    {props.name}
                    </Text>
                    
                
            </View>
            </TouchableOpacity>)
    }
        
    }

    return (
        <SafeAreaView>
            <View>{
                cards
            }</View>
    
        </SafeAreaView>

    )
}

const stl = StyleSheet.create({
    con : {
        width : Dimensions.get("screen").width/2,
        height : Dimensions.get("screen").height/2
    },
    hor : {
        width : Dimensions.get("screen").width/2,
        height : 50
    },
    txt : {
        color : "black",
        backgroundColor : "rgb(73, 216, 230)"
    
    }
})

export default Card