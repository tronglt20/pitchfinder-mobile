import axios from "axios";
import * as SecureStore from "expo-secure-store";

const instance = axios.create({
  baseURL: "http://192.168.1.24:8090/api",
});

const token = SecureStore.getItemAsync("accessToken");
if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default instance;
