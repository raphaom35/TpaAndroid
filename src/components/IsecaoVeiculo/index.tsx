import React from "react";
import { View, Image, Text, Linking } from "react-native";
import haeartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatappIcon from "../../assets/images/icons/whatsapp.png";
import AsyncStoreger from "@react-native-community/async-storage";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useState } from "react";
import api from "../../services/api";
import { Isencao_class } from "../../interfaces/isencao";
import {
  Veiculo_isencao,
  Situacao_vei_isen,
  VeiculosEntity,
} from "../../interfaces/veiculo_isencao";

interface IsecaoVeiculoProps {
  veiculo_isencao: VeiculosEntity;
}

const IsecaoVeiculo: React.FC<IsecaoVeiculoProps> = ({ veiculo_isencao }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {/* <Image style={styles.avatar} source={{ uri: teacher.avatar }} /> */}
        <View style={styles.profileInfo}>
          {/* <Text style={styles.name}>{veiculo_isencao?.placa}</Text> */}
          {/* <Text style={styles.placa}>Placas:EHCJSH,EURUAI</Text> */}

          <Text style={styles.name}>{veiculo_isencao?.placa}</Text>
          <Text style={styles.placa}>
            Data inicial:
            {veiculo_isencao?.data_inicio.toString().replace("00:00:00", "")}
          </Text>
          <Text style={styles.placa}>
            Data final:
            {veiculo_isencao?.data_fim.toString().replace("00:00:00", "")}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.priceValue}>
          Situaçao:
          {veiculo_isencao?.situacao == 2 ? (
            <Text style={{ color: "#34a832" }}>
              {Situacao_vei_isen[veiculo_isencao?.situacao]}
            </Text>
          ) : (
            <Text style={{ color: "#788078" }}>
              {Situacao_vei_isen[veiculo_isencao?.situacao]}
            </Text>
          )}
        </Text>
      </View>
    </View>
  );
};

export default IsecaoVeiculo;
