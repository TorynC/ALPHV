import axios from "axios"
//VITE_API_URL="http://127.0.0.1:8000/api"
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export default api 