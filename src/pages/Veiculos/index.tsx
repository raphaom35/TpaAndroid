import React, { useState, useEffect } from "react";
import { View, YellowBox } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import VeiculoItem, { Teacher } from "../../components/VeiculoItem";
import PageHeader from "../../components/PageHeader";
import styles from "./styles";

import { useFocusEffect, useRoute } from "@react-navigation/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import ActionButton from "react-native-action-button";
import { Token } from "../../interfaces/token";
const Veiculos: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    YellowBox.ignoreWarnings(["Animated: `useNativeDriver`"]);
  });
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
        <VeiculoItem />
      </ScrollView>
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
          onPress={() => {}}
        >
          <MaterialCommunityIcons name="car" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

export default Veiculos;
