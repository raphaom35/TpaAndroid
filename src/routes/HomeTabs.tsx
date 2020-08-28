import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Isencao from "../pages/Isencao";
import Veiculos from "../pages/Veiculos";
import Perfil from "../pages/Perfil";
import { Ionicons, Fontisto, Entypo } from "@expo/vector-icons";
const { Navigator, Screen } = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="isencao"
        component={Isencao}
        options={{
          tabBarLabel: "Isenção",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Entypo
                name="address"
                size={size}
                color={focused ? "#71a85d" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Veiculos"
        component={Veiculos}
        options={{
          tabBarLabel: "Veiculos",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Fontisto
                name="car"
                size={size}
                color={focused ? "#71a85d" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Fontisto
                name="person"
                size={size}
                color={focused ? "#71a85d" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default HomeTabs;
