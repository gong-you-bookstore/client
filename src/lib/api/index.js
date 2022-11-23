import axios from 'axios';

const host = window.location.hostname === "localhost" ? process.env.REACT_APP_SERVER_URL : "api";
console.log("host", host)
export const apiClient = axios.create({
  baseURL: host,
});
