import React, { FC, useEffect, useState } from "react";
import { GetStaticPaths } from "next";
import { getAllPostsIds, getPostData, PostType } from "../lib/posts";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../Components/Layout";
import styles from "../styles/zapisek.module.scss";
import { Button } from "@nextui-org/react";
import { Container, Row, Col } from "@nextui-org/react";

type ZapisekProps = {
	postData: PostType;
};

const Zapisek: FC<ZapisekProps> = ({ postData }) => {
	const router = useRouter();
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (router.query.hledat) setSearch(router.query.hledat as string);
	}, [router]);

	return (
		<div className={styles.cont}>
			<Layout>
				<Container fluid>
					<Button auto shadow className={styles.main}>
						<Link href="/">Zpět</Link>
					</Button>
					<h1 className={styles.main}>{postData.title}</h1>
					<Row>
						<div
							className={styles.main}
							dangerouslySetInnerHTML={{
								__html:
									search != ""
										? postData.contentHtml.replace(
												new RegExp(search, "gi"),
												`<span class="selected">${search}</span>`
										  )
										: postData.contentHtml,
							}}
						/>
					</Row>
				</Container>
			</Layout>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getAllPostsIds();
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({
	params,
}: {
	params: { id: string };
}) => {
	if (!params) return null;
	const postData = await getPostData(params.id as string);
	return {
		props: {
			postData,
		},
	};
};

export default Zapisek;
