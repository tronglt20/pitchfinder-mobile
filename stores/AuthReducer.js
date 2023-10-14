import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: {},
		accessToken: "",
		isAuthenticated: false,
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
