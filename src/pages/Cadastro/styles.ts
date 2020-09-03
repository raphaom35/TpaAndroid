import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  containerPeaker: {
    marginTop: 10,
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

  input: {
    height: 54,
    width: 300,
    color: "#2f6d91",
    backgroundColor: "#c0debe",
    borderRadius: 14,
    justifyContent: "center",
    //paddingHorizontal: 10,
    marginTop: 8,
    textAlign: "center",
    alignItems: "center",
  },
  label: {
    fontFamily: "Archivo_700Bold",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  inputGroup: {
    //justifyContent: "space-between",

    justifyContent: "center",
    alignItems: "center",
  },
  inpuBlock: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 5,
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
    marginTop: 15,
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
