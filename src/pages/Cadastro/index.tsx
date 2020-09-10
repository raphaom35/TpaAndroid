import React, { useState, useEffect } from "react";
import {
  View,
  YellowBox,
  TextInput,
  Text,
  ToastAndroid,
  Picker,
} from "react-native";
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
import { TextInputMask } from "react-native-masked-text";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import api from "../../services/api";
const Cadastro: React.FC = () => {
  const { navigate } = useNavigation();

  const [showfisica, SetShowfisica] = useState<boolean>(false);
  const [showjurudica, SetShowjuridica] = useState<boolean>(false);
  const [token, setToken] = useState<Token>();
  const [op, setOp] = useState("");
  const [options, setOptions] = useState();
  const [nome, setNome] = useState("");
  const [nome_empresa, setNome_empresa] = useState("");
  nome_empresa;
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");
  useFocusEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
    loadtoken();
  });
  async function loadtoken() {
    AsyncStorage.getItem("token").then(async (response) => {
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
  function handleValueChange(pessoa: String) {
    setOp(String(pessoa));
    if (pessoa == "juridica") {
      SetShowjuridica(true);
      SetShowfisica(false);
    }
    if (pessoa == "fisica") {
      SetShowfisica(true);
      SetShowjuridica(false);
    }
  }
  async function handlecadastrar() {
    if (showfisica == true) {
      if (email == "" || nome == "" || telefone == "" || cpf == "") {
        ToastAndroid.show("Favor preencher os campos!", ToastAndroid.LONG);
      } else {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("nome", nome);
        formData.append("telefone", telefone);
        formData.append(
          "cpf",
          cpf.replace(".", "").replace("-", "").replace(".", "")
        );
        const response = await api.post("?insert_cliente", formData);
        const stringjson = JSON.stringify(response.data);
        if (stringjson.includes("CPF já cadastrado")) {
          ToastAndroid.show("CPF já cadastrado!", ToastAndroid.LONG);
        } else {
          ToastAndroid.show(
            "Cadastro efetuado com sucesso \n verifique seu email",
            ToastAndroid.LONG
          );
          navigate("Login");
        }
      }
    } else {
      if (
        email == "" ||
        nome == "" ||
        telefone == "" ||
        cpf == "" ||
        cnpj == "" ||
        nome_empresa == ""
      ) {
        ToastAndroid.show("Favor preencher os campos!", ToastAndroid.LONG);
      } else {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("nome", nome);
        formData.append(
          "telefone",
          telefone.replace(") ", "").replace("(", "").replace("-", "")
        );
        formData.append(
          "cnpj",
          cnpj
            .replace(".", "")
            .replace("-", "")
            .replace(".", "")
            .replace("/", "")
        );
        formData.append("razao_social", nome_empresa);
        formData.append(
          "cpf",
          cpf.replace(".", "").replace("-", "").replace(".", "")
        );
        const response = await api.post("?insert_cliente", formData);
        const stringjson = JSON.stringify(response.data);
        if (stringjson.includes("CPF já cadastrado")) {
          ToastAndroid.show("CPF já cadastrado!", ToastAndroid.LONG);
        } else if (stringjson.includes("Cnpj já cadastrado")) {
          ToastAndroid.show("Cnpj já cadastrado!", ToastAndroid.LONG);
        } else if (stringjson.includes("ok")) {
          ToastAndroid.show(
            "Cadastro efetuado com sucesso \n verifique seu email",
            ToastAndroid.LONG
          );
          navigate("Login");
        }
      }
    }
  }
  return (
    <View style={styles.container}>
      <PageHeader title="Cadastro" />
      <View style={styles.containerPeaker}>
        {/* <Text style={styles.label}>Tipo de Cadastro</Text> */}
        <Picker
          style={{
            width: "80%",
          }}
          selectedValue={op}
          mode="dialog"
          onValueChange={handleValueChange}
          itemStyle={{
            textAlign: "center",
          }}
        >
          <Picker.Item label="Selecione o tipo de cadastro" />
          <Picker.Item label="Pessoa fisica" value="fisica" />
          <Picker.Item label="Pessoa juridica" value="juridica" />
        </Picker>
      </View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={"always"}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {showjurudica && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pessoa Juridica</Text>
            <View style={styles.inpuBlock}>
              <TextInput
                style={styles.input}
                placeholder="Nome da Compania"
                placeholderTextColor="#2f6d91"
                value={nome_empresa}
                onChangeText={(text) => setNome_empresa(text)}
              />
              <TextInputMask
                type={"cnpj"}
                style={styles.input}
                placeholder="CNPJ"
                placeholderTextColor="#2f6d91"
                value={cnpj}
                onChangeText={(text) => setCnpj(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#2f6d91"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInputMask
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99) ",
                }}
                style={styles.input}
                placeholder="Telefone/Celular"
                placeholderTextColor="#2f6d91"
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Nome do responsavel"
                placeholderTextColor="#2f6d91"
                value={nome}
                onChangeText={(text) => setNome(text)}
              />
              <TextInputMask
                style={styles.input}
                type={"cpf"}
                placeholder="Cpf do responsável"
                placeholderTextColor="#2f6d91"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <RectButton
                onPress={handlecadastrar}
                style={[styles.button, styles.buttonSecondary]}
              >
                <Text style={styles.buttonText}>Cadastrar</Text>
              </RectButton>
            </View>
          </View>
        )}
        {showfisica && (
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Pessoa Fisica</Text>
            <View style={styles.inpuBlock}>
              <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#2f6d91"
                value={nome}
                onChangeText={(text) => setNome(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#2f6d91"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Telefone/Celular"
                placeholderTextColor="#2f6d91"
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
              />
              <TextInputMask
                style={styles.input}
                type={"cpf"}
                placeholder="Cpf"
                placeholderTextColor="#2f6d91"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
              />
            </View>
            <View style={styles.buttonsContainer}>
              <RectButton
                onPress={handlecadastrar}
                style={[styles.button, styles.buttonSecondary]}
              >
                <Text style={styles.buttonText}>Cadastrar</Text>
              </RectButton>
            </View>
          </View>
        )}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Cadastro;
