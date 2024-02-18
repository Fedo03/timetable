import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

import { useState, useEffect, useCallback } from "react";

import DocumentPicker, {types}  from "react-native-document-picker";

import Pdf from 'react-native-pdf'



const Home = () => {

    const [file,setFile] = useState()
    

  const doc = useCallback( async () => {
    try {
        const res = await DocumentPicker.pick({
            presentationStyle : 'fullScreen',
            type : [types.pdf],
            allowMultiSelection : false,
        })
        setFile(res)
        console.log(res)

    } catch (err) {
        console.warn(err)
    }
  }, []) 

    const source = {url : file,
                    catch : true}


    return (
        <SafeAreaView>

<View>
     <Pdf source={source} 
          style={sty.pdf}/>

    
</View>

                 
<View>

            <TouchableOpacity  onPress={doc} >
                <View>
                    <Text>add timetable</Text>
                </View>                                                                                                                                                                                                                                                                                                     

            </TouchableOpacity>
</View>
        </SafeAreaView>

    )
}


const sty = StyleSheet.create({
    pdf : {
        flex : 1,
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
    }
})



export default Home