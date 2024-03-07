import React from 'react'
import { SafeAreaView ,
         View,
         Text
        } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const Icons = (props) => {

    const icons = <Icon name={props.name} size={props.size} color={props.color} />
   /*const customTextButton = (
    <Icon.Button name="apple" backgroundColor="#3b5998">
      
    </Icon.Button>
  ); */
    return (icons)
}

export default Icons