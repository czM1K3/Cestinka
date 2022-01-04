import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";

const Fullscreen: FC = () => {
	const [text, setText] = useState("");
	const router = useRouter();

	useEffect(() => {
		const text = router.query.text;
		if (text) setText(text as string);
	}, [router]);

	return (
		<div
			style={{
				fontSize: `${200 / text.length}vw`,
			}}
		>
			{text}
		</div>
	);
};

export default Fullscreen;
