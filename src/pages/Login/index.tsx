import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import TPAlogo from "../../assets/images/TPA.png";
import { LinearGradient } from "expo-linear-gradient";
import { Token } from "../../interfaces/token";
import CryptoJS from "react-native-crypto-js";
import AsyncStoreger from "@react-native-community/async-storage";
const Login: React.FC = () => {
  const { navigate } = useNavigation();
  const [user_, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [token, setToken] = useState<Token>();

  useEffect(() => {}, []);

  async function handlesLogin() {
    const formData = new FormData();
    formData.append("auth", "1");
    //`{\"user\":\"" + ${user} + "\",\"pass\":\"" + ${pass} + "\"}`
    formData.append("cred", `{"user":"${user_}","pass":"${pass}"}`);
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
      AsyncStoreger.setItem("token", JSON.stringify(response.data));
      setToken(JSON.parse(JSON.stringify(response.data)));
      navigate("Home", { token: token });
    }

    //console.log(JSON.stringify(response.data));
  }
  function handleNavigateToStudyPages() {
    navigate("Home", { token: token });
  }
  return (
    // <View style={styles.container}>
    <LinearGradient style={styles.container} colors={["#71a85d", "#b1e69e"]}>
      <Image source={TPAlogo} style={styles.logo} />
      <View style={styles.inputGroup}>
        <View style={styles.inpuBlock}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#c1bccc"
            value={user_}
            onChangeText={(text) => setUser(text)}
          />
        </View>
        <View style={styles.inpuBlock}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#c1bccc"
            secureTextEntry={true}
            value={pass}
            onChangeText={(text) => setPass(CryptoJS.MD5(text))}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handlesLogin}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Text style={styles.buttonText}>Criar agora</Text>
        </RectButton>
      </View>
    </LinearGradient>
    //</View>
  );
};

export default Login;
