import React from "react";
import {
  NavigationAction,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GiveClasses from "../pages/GiveClasses";
import HomeTabs from "./HomeTabs";
import Login from "../pages/Login";
import Esqueceu from "../pages/Esqueceu";
import Cadastro from "../pages/Cadastro";
const { Navigator, Screen } = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Home" component={HomeTabs} />
        <Screen name="Esqueceu" component={Esqueceu} />
        <Screen name="Cadastro" component={Cadastro} />
      </Navigator>
    </NavigationContainer>
  );
}
export default AppStack;
