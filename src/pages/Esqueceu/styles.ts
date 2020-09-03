import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
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
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 180,
  },
  button: {
    width: 300,
    height: 43,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f6d91",
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
});
export default styles;
