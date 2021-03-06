import { AppProps } from "next/app";

import AppProvider from "../hooks";

import { storeWrapper } from "../context/store";

import GlobalStyle from "../styles/global";

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}

export default storeWrapper.withRedux(App);
