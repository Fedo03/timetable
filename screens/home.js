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

import AsyncStorage from "@react-native-async-storage/async-storage"

import { Dirs,FileSystem } from "react-native-file-access";

import PdfV from "../comp/pdf";
import Button from "../comp/button";



const Home = ({navigation}) => {

    const [file,setFile] = useState({pdfUri : null})
    const [uris,setUris] = useState()

  function nav(){
    navigation.navigate('canvas')
  }
    

  const set = async (value) => {
    try {
      await AsyncStorage.setItem("path",value)

    } catch (e) {
      console.log(e)
    }
  }

  const get = async () => {
    var value = await AsyncStorage.getItem("path")

    if(value) {
      setFile({pdfUri : value})
    }

  }

  useEffect(()=>{
    get()
  },[])

  useEffect(()=> {
   perm()
   },[])
     

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
        console.log('You can use the storage');
      } else {
        console.log('storage permission denied');
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
         set(filePath)

       
       
        

    } catch (err) {
        console.warn(err)
    }
  }, []) ;

   
    const pdfUri =  file.pdfUri
       console.log(pdfUri)




    return (
        <SafeAreaView>
          <ScrollView>
        

    <View>
      <Button onClick={doc} txt="timetable"/>
    </View>

<View style={sty.con}>
    { 
    pdfUri && 
    (
        <View>
           <PdfV uri={pdfUri} 
            styl={sty.pdf}
            onClick={nav}/>
          
          
          </View>
         
        )
       
        }
</View>



        <View style={sty.con}>

          {
            !pdfUri && 
            (
            <View>
              <Button onClick={doc}
              vst={sty.conT}
              tst={sty.txt} 
              txt="add timetable"/>
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
      color : "black",
      justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey'
    },
    conT : {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
       width: 90,
       height: 30

    }
})



export default Home