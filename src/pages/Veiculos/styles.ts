import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  veiculoList: {
    marginTop: 40,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
  MainAlertView: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddeddd",
    height: 300,
    width: "90%",
    borderColor: "#2f6d91",
    borderRadius: 8,
    borderWidth: 2,
  },
  AlertTitle: {
    fontSize: 25,
    color: "#000000",
    textAlign: "center",
    padding: 10,
    height: "28%",
  },
  AlertMessage: {
    fontSize: 22,
    color: "#000000",
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10,
    height: "40%",
  },
  TextStyle: {
    color: "#0000",
    textAlign: "center",
    fontSize: 22,
    marginTop: -5,
  },
  buttonStyle: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 54,
    width: 300,
    color: "#2f6d91",
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
    marginTop: -25,
  },
  inpuBlock: {
    marginTop: 15,
    width: "100%",
  },
  close: {
    marginTop: 40,
    marginLeft: 300,
  },
  action: {
    marginBottom: 100,
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
