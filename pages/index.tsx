import React, { FC, useState } from "react";
import type { GetStaticProps } from "next";
import Link from "next/link";
import { getPostsForSort, PostsForSort } from "../lib/posts";
import Layout from "../Components/Layout";

type HomeProps = {
	allPostsData: PostsForSort[];
};

const Home: FC<HomeProps> = ({ allPostsData }) => {
	const [search, setSearch] = useState("");
	return (
		<div>
			<Layout>
				<div className="container border p-4 pt-5">
					<h1 className="text-center">Vítejte v zápiscích!</h1>

					<form>
						<div className="mb-3">
							<label htmlFor="search" className="form-label">Vyhledávání</label>
							<input className="form-control" type="text" id="search" onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())} />
						</div>
					</form>

					<div className="list-group">
						{allPostsData.filter(x => x.content.includes(search)).map((item) => (
							<Link key={item.id}  href={`/${item.id}${search ? `?hledat=${search}` : ""}`}>
								<a className="list-group-item list-group-item-action">
									{item.title}
								</a>
							</Link>
						))}
					</div>
				</div>
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
