import React, { FC, useEffect, useState } from "react";
import { GetStaticPaths } from "next";
import { getAllPostsIds, getPostData, getPreviousAndNext, PostType } from "../lib/posts";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../Components/Layout";

type ZapisekProps = {
	postData: PostType;
	previousPage?: string;
	nextPage?: string;
};

const Zapisek: FC<ZapisekProps> = ({ postData, previousPage, nextPage }) => {
	const router = useRouter();
	const [search, setSearch] = useState("");

	useEffect(() => {
		if (router.query.hledat) setSearch(router.query.hledat as string);
	}, [router]);

	return (
		<div>
			<Layout>
				<div className="container border p-4">
					<Link href="/" passHref>
						<a className="btn btn-primary float-start">
							Zpět
						</a>
					</Link>
					<h1 className="text-center">{postData.title}</h1>
					<div
						dangerouslySetInnerHTML={{
							__html:
								search != ""
									? postData.contentHtml.replace(
										new RegExp(search, "gi"),
										`<span class="selected">${search.toUpperCase()}</span>`
									)
									: postData.contentHtml,
						}}
					/>					
					{previousPage && (
						<Link href={`/${previousPage}`} passHref>
							<a className="btn btn-primary float-start">
								Předchozí
							</a>
						</Link>
					)}
					{nextPage && (
						<Link href={`/${nextPage}`} passHref>
							<a className="btn btn-primary float-end">
								Další
							</a>
						</Link>
					)}
					{(previousPage || nextPage ) && (
						<div className="p-3"></div>
					)}
				</div>
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
	const postData = await getPostData(params.id);
	const { previousPage, nextPage } = getPreviousAndNext(params.id);
	return {
		props: {
			postData,
			previousPage,
			nextPage,
		},
	};
};

export default Zapisek;
