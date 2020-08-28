import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cbddf7",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
  },

  button: {
    width: 300,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    borderRadius: 14,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonPrimary: {
    marginTop: 20,
    backgroundColor: "#2f6d91",
  },
  buttonSecondary: {
    backgroundColor: "#5da87f",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    width: 300,
    backgroundColor: "#c0debe",
    borderRadius: 14,
    justifyContent: "center",
    //paddingHorizontal: 10,
    marginTop: 4,
    textAlign: "center",
    alignItems: "center",
  },

  inputGroup: {
    //justifyContent: "space-between",
    marginTop: 10,
  },
  inpuBlock: {
    marginTop: 15,
    width: "100%",
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
export default styles;
