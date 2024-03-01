import React from "react";
import {
  SafeAreaView
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/home'
import CanvasHome from "./screens/canvas";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
           name="home"
           component={Home}
           />
           <Stack.Screen
            name="canvas"
            component={CanvasHome} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;