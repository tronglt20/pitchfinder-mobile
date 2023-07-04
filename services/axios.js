import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "http://192.168.1.26:8090/api",
});

var response = AsyncStorage.getItem("accessToken");
response.then((token) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
});

export default instance;
