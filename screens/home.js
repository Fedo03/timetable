import React from "react";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    PermissionsAndroid,
    Platform,
    ScrollView
} from 'react-native'

import { useState, useEffect, useCallback, Component } from "react";

import RNFetchBlob from "rn-fetch-blob";

import DocumentPicker, {types}  from "react-native-document-picker";

import { Dirs,FileSystem } from "react-native-file-access";

import PdfV from "../comp/pdf";
import Button from "../comp/button";



const Home = () => {

    const [file,setFile] = useState({pdfUri : null})
    const [uris,setUris] = useState()

    const { width, height } = Dimensions.get('window'); 
    console.log(width)
 

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
          <ScrollView>


<View style={sty.con}>
    { pdfUri && (
        <View>
           <PdfV uri={pdfUri} 
            styl={sty.pdf}/>
          
          
          </View>
         
        )
       
        }
</View>



        <View>

          {
            !pdfUri && (
            <View>
              <Button onClick={doc}
              vst={sty.con}
              tst={sty.txt} />
               </View>
              )
          }
          </View>           
          
          

                 


          </ScrollView>
        </SafeAreaView>

    )
}



const sty = StyleSheet.create({
    pdf : {
        flex : 1,
        width : Dimensions.get('window').width,
        height : Dimensions.get('window').height
   
    },
    con : {
    flex : 1,
    justifyContent : "flex-start",
    alignItems : "center",
    marginTop : 0
    
    }, 
    txt :{
      color : "black"
    }
})



export default Home