import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:5000/api/"
    // baseURL: "https://www.bkclothing.xyz/api/"
})

export default instance