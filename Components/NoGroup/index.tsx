import { signout } from "next-auth/client";
import React, { FC } from "react";

const NoGroup: FC = () => {
	return (
		<div>
			<h1>Nemáte přístup do zápisků.</h1>
			<button onClick={() => signout()}>Odhlásit se</button>
		</div>
	);
}

export default NoGroup;
