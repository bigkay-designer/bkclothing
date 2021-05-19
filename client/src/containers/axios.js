import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:5000/api/products/"
})

export default instance