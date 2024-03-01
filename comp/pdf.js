import React from 'react'

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native'

import Pdf from 'react-native-pdf'

const PdfV = (props) => {
return (

    <SafeAreaView>
    <View>
        <TouchableOpacity onPress={props.onClick}>
    <Pdf source={{uri: props.uri}} 
     onLoadComplete={(numberOfPages, filePath) => {
       console.log(`Number of pages: ${numberOfPages}`);
     }}
     onPageChanged={(page, numberOfPages) => {
       console.log(`Current page: ${page}`);
     }}
     onError={(error) => {
       console.error('Error loading PDF:', error);
     }}
         style={props.styl} />
   </TouchableOpacity>
         </View>
         </SafeAreaView>

)

}


export default PdfV