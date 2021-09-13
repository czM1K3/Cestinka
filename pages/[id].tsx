import React, { FC } from "react";
import { GetStaticPaths } from "next";
import { getAllPostsIds, getPostData, PostType } from "../lib/posts";
import Link from "next/link";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}: {params: { id: string } }) => {
	if (!params) return null;
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData
        }
    };
}

type ZapisekProps = {
	postData: PostType;
}

const Zapisek: FC<ZapisekProps> = ({ postData }) => {
	return (
		<div>
            <Link href="/">Zpět</Link>
			<h1>{postData.title}</h1>
			<div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />

		</div>
	);
}

export default Zapisek;
