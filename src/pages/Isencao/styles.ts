import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f7",
  },
  techearList: {
    marginTop: 40,
  },
  searchform: {
    marginBottom: 24,
  },
  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular",
  },
  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
  },
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  inpuBlock: {
    width: "48%",
  },
  submitButtons: {
    backgroundColor: "#04d361",
    height: 56,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text_nao: {
    fontFamily: "Archivo_700Bold",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 230,
    marginLeft: 15,
  },
  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  },
  labelcodigo: {
    fontFamily: "Archivo_700Bold",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  label_numero: {
    fontFamily: "Archivo_400Regular",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  labelstatus: {
    fontFamily: "Archivo_700Bold",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  label_situacao: {
    fontFamily: "Archivo_400Regular",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  label_veiculo_title: {
    fontFamily: "Archivo_700Bold",
    fontSize: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10,
  },
});

export default styles;
