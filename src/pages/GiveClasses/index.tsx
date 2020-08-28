import React from "react";
import { View, ImageBackground, Text } from "react-native";
import giveClassesbgImage from "../../assets/images/give-classes-background.png";
import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();
  function handleNavigateBack() {
    goBack();
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesbgImage}
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>
          Para comecar, voce precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>
      <RectButton onPress={handleNavigateBack} style={styles.okbutton}>
        <Text style={styles.okbuttonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
