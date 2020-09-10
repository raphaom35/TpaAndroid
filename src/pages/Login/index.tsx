import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ImageBackground,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { Linking } from "expo";
import { RectButton } from "react-native-gesture-handler";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import TPAlogo from "../../assets/images/TPA.png";
import { LinearGradient } from "expo-linear-gradient";
import { Token } from "../../interfaces/token";
import CryptoJS from "react-native-crypto-js";
import { AsyncStorage } from "react-native";
import PasswordInputText from "react-native-hide-show-password-input";
const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const [user_, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [token, setToken] = useState<Token>();
  const [icon, setIcon] = useState("eye-off");
  const [hidePassword, setHidePassword] = useState(true);

  async function handlesLogin() {
    const formData = new FormData();
    formData.append("auth", "1");
    //`{\"user\":\"" + ${user} + "\",\"pass\":\"" + ${pass} + "\"}`
    formData.append(
      "cred",
      `{"user":"${user_}","pass":"${CryptoJS.MD5(pass)}"}`
    );
    // formData.append(
    //   "cred",
    //   `{"user":"treinamento@sophiaeteresinharestauranteltda.com.br","pass":"fce22b8abcb1120000b6905587e047e8"}`
    // );
    const response = await api.post("", formData);
    //navigate("GiveClasses");
    const stringjson = JSON.stringify(response.data);

    if (stringjson.includes("Usuario e senha incorretos")) {
      ToastAndroid.show("Usuario e senha incorretos!", ToastAndroid.SHORT);
    } else {
      //console.log(JSON.stringify(response.data));
      AsyncStorage.setItem("token", JSON.stringify(response.data));
      setToken(JSON.parse(JSON.stringify(response.data)));
      navigate("Home", { toke: JSON.stringify(response.data) });
    }

    //console.log(JSON.stringify(response.data));
  }

  function handleNavigateToCadastro() {
    navigate("Cadastro", { token: token });
  }
  function handlesesqueceu() {
    navigate("Esqueceu", { token: token });
  }
  return (
    // <View style={styles.container}>
    <ImageBackground
      source={require("../../assets/images/169.jpg")}
      style={styles.container}
    >
      <LinearGradient
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0.8,
        }}
        colors={["#71a85d", "#b1e69e"]}
      >
        <Image source={TPAlogo} style={styles.logo} />
        <View style={styles.inputGroup}>
          <View style={styles.inpuBlock}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#2f6d91"
              value={user_}
              onChangeText={(text) => setUser(text)}
            />
          </View>
          <View style={styles.inpuBlock}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#2f6d91"
              secureTextEntry={true}
              value={pass}
              onChangeText={(text) => setPass(text)}
            ></TextInput>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <Text
            onPress={handlesesqueceu}
            style={{ marginBottom: 15, marginTop: -20, color: "#2f6d91" }}
          >
            Esqueci a senha?
          </Text>
          <RectButton
            onPress={handlesLogin}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
          <RectButton
            onPress={handleNavigateToCadastro}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Text style={styles.buttonText}>Criar agora</Text>
          </RectButton>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Login;
