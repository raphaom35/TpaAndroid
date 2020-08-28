import axios from "axios";
const api = axios.create({
  baseURL: "http://tpa.autoatendimento.srv.br/tpacliWS/index.php",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
export default api;
