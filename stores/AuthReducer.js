import { createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    accessToken: SecureStore.getItemAsync("accessToken"),
  },
  reducers: {
    login(state, actions) {
      state.accessToken = SecureStore.setItemAsync(
        "accessToken",
        actions.payload.data.accessToken
      );
    },
    logout(state) {
      SecureStore.deleteItemAsync("accessToken");
    },
    setCurrentUser(state, actions) {
      state.user = actions.payload.data;
    },
  },
});

export const AuthActions = authSlice.actions;
export default authSlice.reducer;
