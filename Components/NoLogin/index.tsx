import { signIn } from "next-auth/client";
import React, { FC } from "react";
import { Button } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import styles from "../../styles/zapisek.module.scss";

const NoLogin: FC = () => {
	return (
		<div className={styles.center}>
			Musíte se přihlásit.<br />
			<Button auto onClick={() => signIn()}>Přihlásit se</Button>
		</div>
	);
}

export default NoLogin;
