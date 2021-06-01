import axios from "axios";

export const api = axios.create({
  baseURL: "https://server.voucolar.com.br:8002/",
});

export default api;

