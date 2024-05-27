
import "@/styles/globals.css";
import { Provider } from "react-redux";
import users from "@/reducers/users";
import companies from "@/reducers/companies";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({ users, companies });

const persistConfig = {
  key: "IZTA",
  storage,
  whitelist: ["users"],
  blacklist: ["companies"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers, companies),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}
