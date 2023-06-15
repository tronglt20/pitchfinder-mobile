import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.24:8090/api",
});

// const token = localStorage.getItem("accessToken");

// if (token) {
//   instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

export default instance;
