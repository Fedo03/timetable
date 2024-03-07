import React from "react";
import {
  SafeAreaView
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/home'
import CanvasHome from "./screens/canvas";
import Course from "./screens/courses";


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
            <Stack.Screen
            name="course"
            component={Course} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;