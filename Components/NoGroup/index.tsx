import { signout } from "next-auth/client";
import React, { FC } from "react";
import styles from "../../styles/zapisek.module.scss";
import { Button } from '@nextui-org/react';

const NoGroup: FC = () => {
	return (
		<div className={styles.center}>
			<h1>Nemáte přístup do zápisků.</h1>
			<Button auto shadow onClick={() => signout()}>Odhlásit se</Button>
		</div>
	);
}

export default NoGroup;
