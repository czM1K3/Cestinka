import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="cs">
                <Head>
					<link rel="icon" href="/icon/icon-64.png" />
					<meta name="theme-color" content="#ffffff" />
					<link rel="apple-touch-icon" href="/icon/icon-512.png"/>
					<link rel='manifest' href='/manifest.json' />

					<meta name='application-name' content='Češtinka' />
					<meta name='apple-mobile-web-app-capable' content='yes' />
					<meta name='apple-mobile-web-app-status-bar-style' content='default' />
					<meta name='apple-mobile-web-app-title' content='PWA App' />
					<meta name='description' content='Best PWA App in the world' />
					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='msapplication-TileColor' content='#2B5797' />
					<meta name='msapplication-tap-highlight' content='no' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}