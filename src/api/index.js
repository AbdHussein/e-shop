import axios from "axios";

const api = axios.create({
    baseURL:'https://e-shop-backend-production.up.railway.app/'
})

export default api