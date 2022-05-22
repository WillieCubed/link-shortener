import "../styles/globals.css";
import type { AppProps } from "next/app";

function LinkShortenerApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default LinkShortenerApp;
