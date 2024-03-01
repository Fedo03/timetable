import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,

} from 'react-native'


const Button = ({onClick,vst,tst}) => {
    return (
        <SafeAreaView>
        <View style={vst}>
     

            <TouchableOpacity  onPress={onClick} >
                <View>
                    <Text style={tst}>add timetable</Text>
                </View>                                                                                                                                                                                                                                                                                                     

            </TouchableOpacity>
</View>
</SafeAreaView>
    )
}


export default Button