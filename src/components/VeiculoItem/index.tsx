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
import { veiculocre } from "../../interfaces/veiculocre";
import { FontAwesome5 } from "@expo/vector-icons";
export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}
interface VeiculoProps {
  veiculo_: veiculocre;
}
const VeiculoItem: React.FC<VeiculoProps> = ({ veiculo_ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {/* <Image style={styles.avatar} source={{ uri: teacher.avatar }} /> */}
        <FontAwesome5 name={veiculo_.tipo_icon} size={30} color="black" />
        <View style={styles.veiculoInfo}>
          <Text style={styles.name}>{veiculo_.tipo}</Text>
          <Text style={styles.placa}>{veiculo_.placa}</Text>
        </View>
        <View style={styles.ceditoInfo}>
          <Text style={styles.name}>Crédito</Text>
          <Text style={styles.credito}>{veiculo_.credito}</Text>
        </View>
      </View>
    </View>
  );
};

export default VeiculoItem;
