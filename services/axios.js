import axios from "axios";
import { useSelector } from "react-redux";
const instance = axios.create({
  baseURL: "http://192.168.1.73:8090/api",
});

// if (accesstoken) {
//   instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }

export default instance;
