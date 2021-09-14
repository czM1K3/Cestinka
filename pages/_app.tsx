import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "next-auth/client"

const MyApp = ({ Component, pageProps: { session, ...pageProps} }: AppProps) => {
	return (
		<Provider session={session}>
			<Component {...pageProps} />
		</Provider>
	)
};
export default MyApp;
