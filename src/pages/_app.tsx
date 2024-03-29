import "../styles/index.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { Fragment } from "react";
import { store } from "@/lib/store";
import Loading from "@/Component/Loading/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Loading />
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
