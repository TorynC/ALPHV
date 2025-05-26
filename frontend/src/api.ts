import axios from "axios"

// backend deployment URL
const apiURL = "/choreo-apis/alphv-assignment/backend/v1"

// Create an Axios instance with a base URL
// uses environment variable URL or deployment URL
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
})


export default api 