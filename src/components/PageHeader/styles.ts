import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#71a85d",
  },
  topBar: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  title: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 25,
    lineHeight: 32,
    maxHeight: 160,
    //marginVertical: 45,
    marginHorizontal: 85,
  },
  header: {
    //flexDirection: "column",
    marginTop: -20,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
export default styles;
