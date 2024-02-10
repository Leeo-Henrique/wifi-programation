import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/home";
import { ScheduleTime } from "../pages/ScheduleTime";
import { SetTime } from "../pages/SetTime";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Schedule-Time" component={ScheduleTime} />
        <Stack.Screen name="Set-Time" component={SetTime} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
