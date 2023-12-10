import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const Store = async () => {
	const accessToken = await AsyncStorage.getItem("accessToken");
	if (accessToken !== null) {
		console.log("accessToken", accessToken);
		return accessToken;
	}
	return "";
};

const Auth = async () => {
	const isAuthenticated = await AsyncStorage.getItem("isAuthenticated");
	if (isAuthenticated === "true") {
		console.log("isAuthenticated", isAuthenticated);
		return true;
	}
	return false;
};

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
		accessToken: Store(),
		isAuthenticated: Auth(),
	},
	reducers: {
		login(state, actions) {
			// state.accessToken = actions.payload.data.accessToken;
			state.isAuthenticated = true;
		},
		logout(state) {
			// state.accessToken = "";
			state.isAuthenticated = false;
		},
		setCurrentUser(state, actions) {
			state.user = actions.payload.data;
			state.isAuthenticated = true;
		},
	},
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
