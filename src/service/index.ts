import axios from 'axios'

const REACT_APP_BACKENDURL = process.env.REACT_APP_BACKENDURL

export const ip = `${REACT_APP_BACKENDURL}`

console.log(ip)

const api = axios.create({
  baseURL: `${ip}/`,
  timeout: 50000,
})

export default api
