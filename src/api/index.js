import axios from "axios";

const api = axios.create({
  baseURL: "https://e-shop-backend-production.up.railway.app/",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default api;
