import React, { FC, useState } from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { getPostsForSort, PostsForSort } from "../lib/posts";
import Layout from "../Components/Layout";
import { Text } from '@nextui-org/react';
import { Container } from '@nextui-org/react';
import styles from "../styles/zapisek.module.scss";

type HomeProps = {
	allPostsData: PostsForSort[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => {
	const [search, setSearch] = useState("");
	return (
		<div className={styles.cont}>
		<Layout>
			<Container fluid>
			<div>
				<main>
					<h1>Vítejte v zápiscích!</h1>

					<form>
						<input type="text" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} />
					</form>

					<ul className={styles.ul}>
						{allPostsData.filter(x => x.content.includes(search)).map((item) => (
							<li key={item.id}>
								<Text color="primary"><Link href={`/${item.id}${search ? `?hledat=${search}` : ""}`}>{item.title}</Link></Text>
							</li>
						))}
					</ul>
				</main>
			</div>
			</Container>
		</Layout>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getPostsForSort().map(x => ({
		id: x.id,
		content: x.content.replace(/\*|\#|\(https.*\)|\[|\]/g, "").toLocaleLowerCase(),
		title: x.title,
	}));
	return {
		props: {
			allPostsData,
		},
	};
};

export default Home;
