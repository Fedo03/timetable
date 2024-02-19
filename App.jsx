import React from "react";
import {
  SafeAreaView
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/home'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
           name="home"
           component={Home}
           />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;