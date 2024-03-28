import "../styles/index.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "./store";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
