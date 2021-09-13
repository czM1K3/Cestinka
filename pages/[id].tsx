import React, { FC, useEffect, useState } from "react";
import { GetStaticPaths } from "next";
import { getAllPostsIds, getPostData, PostType } from "../lib/posts";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../Components/Layout";

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
		<Layout>
			<div>
				<Link href="/">Zpět</Link>
				<h1>{postData.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: search != "" ? postData.contentHtml.replace(new RegExp(search, "gi"), `<span class="selected">${search}</span>`) : postData.contentHtml }} />
			</div>
		</Layout>
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
