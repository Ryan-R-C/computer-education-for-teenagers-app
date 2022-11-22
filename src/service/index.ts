import axios from "axios";

const {
    REACT_APP_ENVNODE,
    REACT_APP_BACKENDURL
} = process.env


const backendUrl = REACT_APP_ENVNODE == "development" ? `http://localhost:8000` : REACT_APP_BACKENDURL

export const ip = `${backendUrl}`;

console.log(ip)

//* **************************************************************************************/
const api = axios.create({
  baseURL: `${ip}/`,
  timeout: 50000,
});

export default api