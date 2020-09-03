import React, { useState, useEffect } from "react";
import { View, YellowBox, TextInput, Text, ToastAndroid } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import VeiculoItem, { Teacher } from "../../components/VeiculoItem";
import PageHeader from "../../components/PageHeader";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { AsyncStorage } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";
import { Token } from "../../interfaces/token";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
const Esqueceu: React.FC = () => {
  const { navigate } = useNavigation();
  const [email, SetEmail] = useState("");
  const [token, setToken] = useState<Token>();
  useFocusEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
    loadtoken();
  });
  async function loadtoken() {
    AsyncStoreger.getItem("token").then(async (response) => {
      if (response) {
        const token: Token = JSON.parse(response);
        setToken(token);
        //await get_icencao(token);
        //console.log(token.token);
      } else {
        console.log("Não");
      }
    });
  }
  async function handleresetsenha() {
    if (email != null) {
      const formData = new FormData();

      formData.append("email", email);
      const response = await api.post("?reset_pass", formData);
      const stringjson = JSON.stringify(response.data);
      if (stringjson.includes("ok")) {
        ToastAndroid.show("Nova senha enviada no email", ToastAndroid.SHORT);
        navigate("Login");
      } else {
        ToastAndroid.show("Erro ao resetar a senha", ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show("Favor preencher o email!", ToastAndroid.LONG);
    }
  }
  return (
    <View style={styles.container}>
      <PageHeader title="Reset senha" />
      <View style={styles.inputGroup}>
        <View style={styles.inpuBlock}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#2f6d91"
            value={email}
            onChangeText={(text) => SetEmail(text)}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleresetsenha}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Text style={styles.buttonText}>Resetar agora</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default Esqueceu;
