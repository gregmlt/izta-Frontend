import Footer from "@/components/Footer";
import "@/styles/globals.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import users from "@/reducers/users";

const store = configureStore({
  reducer: { users },
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
