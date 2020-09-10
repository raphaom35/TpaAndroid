import React, { useState, useEffect } from "react";
import {
  View,
  YellowBox,
  Text,
  Button,
  Alert,
  Modal,
  TouchableOpacity,
  Picker,
  ToastAndroid,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import VeiculoItem, { Teacher } from "../../components/VeiculoItem";
import PageHeader from "../../components/PageHeader";
import styles from "./styles";
import { AsyncStorage } from "react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";
import { Token } from "../../interfaces/token";
import api from "../../services/api";
import { AntDesign } from "@expo/vector-icons";
import { CatAllveiculos, Tariff } from "../../interfaces/catvei";
import * as Promise from "bluebird";
import { RectButton } from "react-native-gesture-handler";
import { FloatingAction } from "react-native-floating-action";
import { veiculocre, Tip_vei, Tip_vei_icon } from "../../interfaces/veiculocre";
const Veiculos: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  const [token, setToken] = useState<Token>();
  const [swipeToClose, setSwipeToClose] = useState<boolean>(false);
  const [onClose, SetOnClose] = useState<boolean>(false);
  const [catVei, SetcatVei] = useState<Tariff[]>([]);
  const [onOpen, SetOnOpen] = useState<boolean>(false);
  const [veiculos, SetVeiculos] = useState<veiculocre[]>([]);
  const [placa, Setplaca] = useState("");
  const [op, setOp] = useState("");
  const [options, setOptions] = useState("");
  const [options1, setOptions1] = useState("");
  useFocusEffect(() => {
    loadtoken();
    // get_tarrif();
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
  });
  useEffect(() => {
    const fetchData = async () => {
      // get_tarrif();
    };
    fetchData();
  }, [token]);
  async function loadtoken() {
    AsyncStorage.getItem("token").then(async (response) => {
      if (response) {
        const token: Token = JSON.parse(response);
        setToken(token);

        //console.log(JSON.stringify(response_.data));
        //SetcatVei(catvei);
      } else {
        console.log("Não");
      }
    });
  }
  async function get_tarrif() {
    const response_ = await api.post("?get_tariffs");
    //await get_icencao(token);
    // const catvei: CatAllveiculos = JSON.parse(JSON.stringify(response_.data));
    AsyncStorage.setItem("tarrif", JSON.stringify(response_.data));
  }

  function opennn() {
    setSwipeToClose(true);
  }
  function close() {
    setSwipeToClose(false);
    Setplaca("");
  }
  function handleValueChange(tipo: String) {
    setOp(String(tipo));
    setOptions(Tip_vei[Number(tipo)]);
    setOptions1(Tip_vei_icon[Number(tipo)]);
  }
  function addveiculo() {
    if (placa != "") {
      SetVeiculos([
        ...veiculos,
        { placa: placa, tipo: options, credito: "0", tipo_icon: options1 },
      ]);
      setSwipeToClose(false);
      Setplaca("");
    } else {
      ToastAndroid.show("Favor preencher a placa!", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Veiculos" />

      <ScrollView
        style={styles.veiculoList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {veiculos.map((veiculo: veiculocre) => {
          return <VeiculoItem key={veiculo.placa} veiculo_={veiculo} />;
        })}
      </ScrollView>
      <View>
        <Modal
          visible={swipeToClose}
          transparent={true}
          animationType={"fade"}
          onRequestClose={() => {
            setSwipeToClose(false);
          }}
        >
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View style={styles.MainAlertView}>
              <AntDesign
                name="closecircleo"
                size={24}
                color="black"
                style={styles.close}
                onPress={close}
              />
              <Text style={styles.AlertTitle}>Adicionar carro</Text>

              <View style={styles.inputGroup}>
                <View style={styles.inpuBlock}>
                  <TextInput
                    style={styles.input}
                    placeholder="Placa"
                    placeholderTextColor="#2f6d91"
                    value={placa}
                    onChangeText={(text) => Setplaca(text)}
                    maxLength={7}
                    autoCapitalize="characters"
                  />
                </View>
                <View style={styles.inpuBlock}></View>
              </View>

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
                enabled={true}
              >
                <Picker.Item label="Selecione o tipo de carro" />

                <Picker.Item label="Motocicleta e motoneta" value="1" />
                <Picker.Item
                  label="Veículos de pequeno porte (passeio, automóvel)"
                  value="2"
                />
                <Picker.Item
                  label="Veículos utilitários (camionete e furgão)"
                  value="3"
                />
                <Picker.Item
                  label="Veículos de excursão (van e micro-ônibus)"
                  value="4"
                />
                <Picker.Item label="Caminhões" value="5" />
                <Picker.Item label="Ônibus" value="6" />
              </Picker>

              <View
                style={{ width: "100%", height: 0.5, backgroundColor: "#fff" }}
              />

              <View style={{ flexDirection: "row", height: "30%" }}>
                {/* <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={() => {}}
                  activeOpacity={0.7}
                >
                  <Text style={styles.TextStyle}> OK </Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 0.5,
                    height: "100%",
                    backgroundColor: "#fff",
                  }}
                />

               */}
                {/* <RectButton
                  onPress={addveiculo}
                  style={[styles.button, styles.buttonSecondary]}
                >
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </RectButton> */}
                <TouchableOpacity
                  style={[styles.button, styles.buttonSecondary]}
                  onPress={addveiculo}
                  activeOpacity={0.7}
                >
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <ActionButton buttonColor="#2f6d91">
        <ActionButton.Item
          buttonColor="#3498db"
          title="Comprar Creditos"
          onPress={() => {}}
        >
          <MaterialIcons name="attach-money" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#1abc9c"
          title="Adicionar Carro"
          onPress={opennn}
        >
          <MaterialCommunityIcons name="car" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default Veiculos;
