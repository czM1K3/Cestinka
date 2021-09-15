import { signIn } from "next-auth/client";
import React, { FC } from "react";
import styles from "../../styles/zapisek.module.scss";
import { Button } from '@nextui-org/react';

const NoLogin: FC = () => {
	return (
		<div className={styles.center}>
			<h1>Musíte se přihlásit.</h1>
			<Button auto shadow onClick={() => signIn()}>Přihlásit se</Button>
		</div>
	);
}

export default NoLogin;
