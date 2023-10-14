import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
	baseURL: "http://192.168.1.10:8090/api",
});

instance.interceptors.request.use(
	async (config) => {
		const token = await AsyncStorage.getItem("accessToken");
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(response) => response,
	(error) => {
		if (error.message === "Network Error") {
			console.error("Network Error:", error);
		} else {
			console.error("Error:", error);
		}
		return Promise.reject(error);
	}
);

export default instance;
