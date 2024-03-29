import React from "react";
import {
  SafeAreaView
} from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/home'
import CanvasHome from "./screens/canvas";
import Course from "./screens/courses";
import Assign from "./screens/assign";
import Quiz from "./screens/quiz";
import Assignm from "./screens/assignm";


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
           <Stack.Screen 
            name="ASSIGNMENTS"
            component={Assign} />
            <Stack.Screen 
            name="FILES"
            component={Assign} />
            <Stack.Screen 
            name="GRADES"
            component={Assign} />
            <Stack.Screen 
            name="MODULES"
            component={Assign} />
            <Stack.Screen 
            name="PEOPLE"
            component={Assign} />
            <Stack.Screen 
            name="PAGES"
            component={Assign} />
            <Stack.Screen 
            name="QUIZ"
            component={Quiz} />
            <Stack.Screen 
            name="ASSIGMENT"
            component={Assignm} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default App;