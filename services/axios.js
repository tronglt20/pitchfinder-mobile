import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
  baseURL: "http://192.168.1.137:8090/api",
});

// Add a request interceptor
instance.interceptors.request.use(
  async (config) => {
    // Get the accessToken from AsyncStorage
    const token = await AsyncStorage.getItem("accessToken");
    // If the token is available, set it in the Authorization header
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
