import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./AuthReducer";
import PitchReducer from "./PitchReducer";

const Store = configureStore({
  reducer: {
    auth: AuthReducer,
    pitch: PitchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
