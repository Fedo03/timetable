import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    PermissionsAndroid,
    Platform
} from 'react-native'

import { useState, useEffect, useCallback, Component } from "react";

import RNFetchBlob from "rn-fetch-blob";

import DocumentPicker, {types}  from "react-native-document-picker";

import { Dirs,FileSystem } from "react-native-file-access";

import Pdf from 'react-native-pdf'



const Home = () => {

    const [file,setFile] = useState({pdfUri : null})
    const [uris,setUris] = useState()
 

  useEffect(()=> {
   perm()
   })
     

    const perm = async () => {
  try {

      const gran = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
        title: 'Access to files',
        message: 'idk how to hack',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })
      const grant = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
        title: 'Access to files',
        message: 'idk how to hack',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      })
      if (grant === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    
    } catch (err) {
      console.warn(err);
    }

    }



    





  const doc = useCallback( async () => {
    try {
        const res = await DocumentPicker.pick({
            presentationStyle : 'fullScreen',
            type : [types.pdf],
            allowMultiSelection : false,
        })
        const pdfP = res[0].uri
        const cont = await RNFetchBlob.fs.readFile(pdfP,'base64')
           

        const date = new Date();
        const fileName = date.getTime()+ ".pdf"
        const filePath = Dirs.DocumentDir +  "/" + fileName
         setUris(filePath)

        
 
         await FileSystem.writeFile(filePath, cont, 'base64');
  
         if (!FileSystem.exists(filePath)) return;
  
         await FileSystem.cpExternal(filePath, fileName,'downloads');
         
         setFile({pdfUri : filePath})
        
        
        

    } catch (err) {
        console.warn(err)
    }
  }, []) ;

   
    const pdfUri =  file.pdfUri
       console.log(pdfUri)

    return (
        <SafeAreaView>

<View style={sty.con}>
    { pdfUri && (
        <View>
     <Pdf source={{uri: pdfUri}} 
          style={sty.pdf}
          />
          
          
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
<View style={sty.con}>
     <Pdf source={{uri: '/data/user/0/com.timetable/files/1709305616336.pdf',catche :true}} 
          style={sty.pdf}
          />
          
          
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