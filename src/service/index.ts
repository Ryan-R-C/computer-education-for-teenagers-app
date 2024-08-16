import axios from 'axios'

const { REACT_APP_ENVNODE } = process.env

const REACT_APP_BACKENDURL = 'https://computer-education-backend.onrender.com'

const backendUrl = REACT_APP_ENVNODE === 'development' ? REACT_APP_BACKENDURL : REACT_APP_BACKENDURL

export const ip = `${backendUrl}`

console.log(ip)

const api = axios.create({
  baseURL: `${ip}/`,
  timeout: 50000,
})

export default api
