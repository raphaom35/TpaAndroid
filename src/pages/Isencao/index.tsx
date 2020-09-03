import React, { useState, useEffect } from "react";
import { View, Text, ToastAndroid } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import IsecaoVeiculo from "../../components/IsecaoVeiculo";
import { ScrollView } from "react-native-gesture-handler";

import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";
import { AsyncStorage } from "react-native";
import { Token } from "../../interfaces/token";
import { Isencao_class } from "../../interfaces/isencao";
import {
  Veiculo_isencao,
  VeiculosEntity,
} from "../../interfaces/veiculo_isencao";
interface RootStackParamList {
  toke: String;
}
const Isencao: React.FC = ({}) => {
  const [token, setToken] = useState<Token>();
  const [isencao, setIsencao] = useState<Isencao_class>();
  const [veiculos, setVeiculos] = useState<Veiculo_isencao>();
  const [] = useState(false);
  const {} = useNavigation();
  async function loadIsenccao() {
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
  async function get_icencao(token: string, cpf: string) {
    const formData = new FormData();
    formData.append("token", token);
    formData.append("cpf", cpf);
    const response_isencao = await api.post("?get_isencao_cli", formData);
    //console.log(response_isencao.data);
    if (response_isencao != null) {
      try {
        const isen: Isencao_class = JSON.parse(
          JSON.stringify(response_isencao.data)
        );
        setIsencao(isen);
        //console.log(isen?.codigo);
        //await get_veiculos(String(isen?.codigo), token.token);
      } catch (e) {
        ToastAndroid.show(e, ToastAndroid.SHORT);
      }

      //await get_veiculos(String(isencao?.codigo), token.token);
    } else {
      ToastAndroid.show("Erro para pegar a inseção", ToastAndroid.SHORT);
    }
  }
  async function get_veiculos(codigo: string, token: string) {
    const formDataVei = new FormData();
    formDataVei.append("token", token);

    formDataVei.append("codigo", String(codigo));
    //pegar veiculos isenção
    const response_veicuolas = await api.post(
      "?get_veiculo_isencao",
      formDataVei
    );
    //console.log(response_veicuolas.data);
    if (response_veicuolas != null) {
      //console.log(JSON.stringify(response_veicuolas.data));
      try {
        const jkjkjk: Veiculo_isencao = JSON.parse(
          JSON.stringify(response_veicuolas.data)
        );
        setVeiculos(jkjkjk);
      } catch (e) {
        ToastAndroid.show(e, ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show(
        "Erro para pegar os veiculos da isenção",
        ToastAndroid.SHORT
      );
    }
  }

  useEffect(() => {
    // setDidMount(true);
    const fetchData = async () => {
      console.log();
      loadIsenccao();
    };
    fetchData();

    // return () => setDidMount(false);
  }, []);
  useEffect(() => {
    get_icencao(String(token?.token), String(token?.usuario[0].cpf));
  }, [token]);
  useEffect(() => {
    get_veiculos(String(isencao?.codigo), String(token?.token));
  }, [isencao]);

  return (
    <View style={styles.container}>
      <PageHeader title="Isenção" />
      <ScrollView
        style={styles.techearList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {isencao != null ? (
          <>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.label_numero}>
                Numero:
                <Text style={styles.labelcodigo}>{isencao?.codigo}</Text>
              </Text>
              <Text style={styles.label_situacao}>
                Situaçao:
                {isencao?.anexos_sts == "Aprovado" ? (
                  <Text
                    style={{
                      color: "#34a832",
                      fontFamily: "Archivo_700Bold",
                      fontSize: 25,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {isencao?.anexos_sts}
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: "#788078",
                      fontFamily: "Archivo_700Bold",
                      fontSize: 25,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {isencao?.anexos_sts}
                  </Text>
                )}
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.label_veiculo_title}>Veiculos</Text>
            </View>
            {veiculos?.veiculos?.map((veiculo: VeiculosEntity) => {
              return (
                <IsecaoVeiculo key={veiculo.placa} veiculo_isencao={veiculo} />
              );

              //console.log(veiculo);
            })}

            {/* <IsecaoVeiculo /> */}
            {/* {veiculos != null
              ? console.log(veiculos[0].placa)
              : console.log("cagou")}
            })} */}
          </>
        ) : (
          <Text style={styles.text_nao}>
            Não Exite Inseções para esse cliente
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Isencao;
