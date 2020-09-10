import { StatusBar } from "expo-status-bar";
import React from "react";
import * as Updates from "expo-updates";
import { AppLoading } from "expo";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from "@expo-google-fonts/archivo";
import { useEffect } from "react";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import AppStack from "./src/routes/AppStack";
export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  useEffect(() => {
    async function updateApp() {
      const { isAvailable } = await Updates.checkForUpdateAsync();
      if (isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync(); // depende da sua estratégia
      }
    }
    updateApp();
  }, []);
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="auto" />
      </>
    );
  }
}
