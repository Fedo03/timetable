import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

import { useState, useEffect, useCallback, Component } from "react";

import DocumentPicker, {types}  from "react-native-document-picker";

import Pdf from 'react-native-pdf'



const Home = () => {

    const [file,setFile] = useState({pdfUri : null})



  const doc = useCallback( async () => {
    try {
        const res = await DocumentPicker.pick({
            presentationStyle : 'fullScreen',
            type : [types.pdf],
            allowMultiSelection : false,
        })
        setFile({pdfUri : res[0].uri})
        console.log(file.pdfUri)

    } catch (err) {
        console.warn(err)
    }
  }, []) ;

    //const source = {url : file,
    //                catch : true}
//render() {
    const pdfUri = file.pdfUri
    console.log(pdfUri)

    return (
        <SafeAreaView>

<View style={sty.con}>
    { pdfUri && (
        <View>
     <Pdf source={{uri: pdfUri}} 
          style={sty.pdf}
          onLoadComplete={(numberOfPages, filePath) =>{
             console.log(numberOfPages)
          }}/>
          
          <Text>pdf</Text>
          </View>
        )
       
        }
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
//}


const sty = StyleSheet.create({
    pdf : {
        flex : 1,
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height,
    },
    con : {
    flex : 1,
    justifyContent : "flex-start",
    alignItems : "center",
    
    }
})



export default Home