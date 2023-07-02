import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: "",
  },
  reducers: {
    login(state, actions) {
      state.accessToken = actions.payload.data.accessToken;
    },
    logout(state) {
      state.accessToken = "";
    },
    setCurrentUser(state, actions) {
      state.user = actions.payload.data;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
