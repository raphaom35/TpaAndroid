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
export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}
interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}
const VeiculoItem: React.FC = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        {/* <Image style={styles.avatar} source={{ uri: teacher.avatar }} /> */}
        <View style={styles.veiculoInfo}>
          <Text style={styles.name}>Automovel</Text>
          <Text style={styles.placa}>EHCJSH</Text>
        </View>
        <View style={styles.ceditoInfo}>
          <Text style={styles.name}>Crédito</Text>
          <Text style={styles.credito}>0</Text>
        </View>
      </View>
    </View>
  );
};

export default VeiculoItem;
