import React, { FC, useState } from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import Head from "next/head";
import { getPostsForSort, PostsForSort } from "../lib/posts";
import styles from "../styles/Home.module.css";
import { signOut } from "next-auth/react"
import Layout from "../Components/Layout";

type HomeProps = {
	allPostsData: PostsForSort[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => {
	const [search, setSearch] = useState("");
	return (
		<Layout>
			<button onClick={() => signOut()}>Sign Out</button>
			<div className={styles.container}>
				<main className={styles.main}>
					<h1 className={styles.title}>Vítejte v zápiscích!</h1>

					<form>
						<input type="text" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} />
					</form>

					<ul>
						{allPostsData.filter(x => x.content.includes(search)).map((item) => (
							<li key={item.id}>
								<Link href={`/${item.id}${search ? `?hledat=${search}` : ""}`}>{item.title}</Link>
							</li>
						))}
					</ul>
				</main>
			</div>
		</Layout>
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
