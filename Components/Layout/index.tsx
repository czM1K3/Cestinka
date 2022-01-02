import Head from "next/head";
import React, { FC } from "react";

const Layout: FC = ({ children }) => {
	return (
		<>
			<Head>
				<title>Češtinka</title>
			</Head>
			<main className="main">
				{children}
			</main>
		</>
	);
}

export default Layout;
