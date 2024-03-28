import "../styles/index.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { Fragment } from "react";
import { store } from "@/lib/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
