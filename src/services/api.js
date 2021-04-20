import axios from "axios";

export const api = axios.create({
  baseURL: "http://voucolar.bestapp.com.br:8002/",
});

export default api;

