import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
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
import { categoriesApi } from "../services/categories";
import { stocksApi } from "../services/stocks";
import { brandsApi } from "../services/brands";
import { firmsApi } from "../services/firms";

const persistConfig = {
  key: "root", // storage veriler key-value şeklinde saklanır. Buraki key storagedaki keyi temsil ediyor.
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [firmsApi.reducerPath]: firmsApi.reducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
    return defaultMiddleware.concat(stocksApi.middleware).concat(brandsApi.middleware).concat(firmsApi.middleware).concat(categoriesApi.middleware);
  },
  devTools: import.meta.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
export default store;

//! prop drilling
//! Global State Management (Redux, Mobx, Zustand, Context API)
//? Context API native bir yapı. Yani reactin kendisine ait.
