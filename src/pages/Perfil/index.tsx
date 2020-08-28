import React, { useState, useEffect } from "react";
import { View, YellowBox } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import VeiculoItem, { Teacher } from "../../components/VeiculoItem";
import PageHeader from "../../components/PageHeader";
import styles from "./styles";

import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";
const Perfil: React.FC = () => {
  const [favorites, setFavorites] = useState([]);
  useFocusEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
  });
  return (
    <View style={styles.container}>
      <PageHeader title="Perfil" />
    </View>
  );
};

export default Perfil;
