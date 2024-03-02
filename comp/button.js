import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,

} from 'react-native'


const Button = ({onClick,vst,tst,txt}) => {
    return (
        <SafeAreaView>
        <View style={vst}>
     

            <TouchableOpacity  onPress={onClick} >
                <View>
                    <Text style={tst}>{txt}</Text>
                </View>                                                                                                                                                                                                                                                                                                     

            </TouchableOpacity>
</View>
</SafeAreaView>
    )
}


export default Button