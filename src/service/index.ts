import axios from "axios";

const {
    REACT_APP_ENVNODE,
    REACT_APP_BACKENDURL
} = process.env


const backendUrl = REACT_APP_ENVNODE == "development" ? `http://localhost` : REACT_APP_BACKENDURL

const port = process.env.REACT_APP_BACKEND_PORT || "8000";

export const ip = `${backendUrl}:${port}`;

console.log(ip)

//* **************************************************************************************/
const api = axios.create({
  baseURL: `${ip}/`,
  timeout: 50000,
});

export default api