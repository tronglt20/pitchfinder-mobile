import axios from "axios";

const instance = axios.create({
  baseURL: process.env.API_ENDPOINT,
});

// const token = localStorage.getItem("accessToken");

// if (token) {
//   instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

export default instance;
