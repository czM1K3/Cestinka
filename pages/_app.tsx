import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps: { session, ...pageProps} }: AppProps) => {
	return <Component {...pageProps} />;
};
export default MyApp;
