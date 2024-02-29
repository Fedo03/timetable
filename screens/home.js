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

import RNFetchBlob from "rn-fetch-blob";

import DocumentPicker, {types}  from "react-native-document-picker";

import Pdf from 'react-native-pdf'



const Home = () => {

    const [file,setFile] = useState({pdfUri : null})
    const [uris,setUris] = useState()
 


  const doc = useCallback( async () => {
    try {
        const res = await DocumentPicker.pick({
            presentationStyle : 'fullScreen',
            type : [types.pdf],
            allowMultiSelection : false,
        })

        const pdfP = res[0].uri
        setUris(pdfP)
        const cont = await RNFetchBlob.fs.readFile(pdfP,'base64')
        setFile({pdfUri : cont})
       // console.log(cont)

    } catch (err) {
        console.warn(err)
    }
  }, []) ;

   
    const pdfUri =  file.pdfUri
  //  console.log(pdfUri)
    console.log(uris)

    return (
        <SafeAreaView>

<View style={sty.con}>
    { pdfUri && (
        <View>
     <Pdf source={{uri: 'data:application/pdf;base64,' + pdfUri}} 
          style={sty.pdf}
          />
          
          
          </View>
         
        )
       
        }
</View>

<View>
     <Pdf source={{uri: "content://com.android.providers.downloads.documents/document/8123" , cache : true}}
          onLoadComplete={(numberOfPages,filepath) => {
            console.log(numberOfPages)
          }}
          style={sty.pdf}
          />
          
          
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
        width : "100%",
        height : "100%"
      //  width : Dimensions.get('window').width,
     //   height : Dimensions.get('window').height,
    },
    con : {
    flex : 1,
    justifyContent : "flex-start",
    alignItems : "center",
    
    }
})



export default Home