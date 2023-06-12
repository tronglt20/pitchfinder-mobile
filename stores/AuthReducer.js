import { createSlice } from "@reduxjs/toolkit";
// const token = localStorage.getItem("accessToken");

const initialAuthState = {
  authenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      state.authenticated = true;
      // localStorage.setItem("accessToken", actions.payload.data.accessToken);
    },
    logout(state) {
      state.authenticated = false;
      // localStorage.removeItem("accessToken");
    },
    setCurrentUser(state, actions) {
      state.user = actions.payload.data;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
