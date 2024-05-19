import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";

import { periodInfoReducer } from "./authReducer";

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["refreshToken", "sid", "token"],
};

export const store = configureStore({
  reducer: {
    period: persistReducer(userPersistConfig, periodInfoReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
