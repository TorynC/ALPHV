import axios from "axios"

const apiURL = "/choreo-apis/alphv-assignment/backend/v1"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
})

export default api 