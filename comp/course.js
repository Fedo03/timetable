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

const Card = (props) {
      
    const [card, setCard] = useState(false)

    if(props.card == "card") {
        setCard(true)
    }
        


    return (
        <SafeAreaView>
     <TouchableOpacity onPress={props.onClick}>
        <View style{stl.con}>
        {
            card && (
                <View>
                <Text style{stl.txt}>
                {props.name}
                </Text>

                </View>

            )
        }
        </View> 
        </TouchableOpacity>


    <TouchableOpacity onPress={props.onClick}>
        <View style{stl.hor}>
        {
            !card && (
                <View>
                <Text style{stl.txt}>
                {props.name}
                </Text>
                </View>
            )
        }
        </View>
        </TouchableOpacity>
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
        height : "50"
    },
    txt : {
        color : "black",
        background : "rgb(0,0,50)"
    
    }
})

export default Card