import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/TPA.png";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  children,
  headerRight,
}) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <AntDesign
          name="arrowleft"
          size={28}
          style={{ marginLeft: 5, marginTop: 12, color: "#cacbcc" }}
          onPress={handleGoBack}
        ></AntDesign>
        <Image
          style={{ width: 50, height: 40, marginTop: 12 }}
          source={logoImg}
          resizeMode="contain"
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
