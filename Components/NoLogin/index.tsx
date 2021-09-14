import { signIn } from "next-auth/client";
import React, { FC } from "react";

const NoLogin: FC = () => {
	return (
		<div>
			Musíte se přihlásit.<br />
			<button onClick={() => signIn()}>Přihlásit se</button>
		</div>
	);
}

export default NoLogin;
