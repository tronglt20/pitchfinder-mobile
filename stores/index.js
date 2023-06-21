import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducer";

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
