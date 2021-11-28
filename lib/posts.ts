import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "zapisky");

export const getPostsForSort = (): PostsForSort[] => {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { content, data: { title } } = matter(fileContents);
		return { id, content, title };
	});
	return allPostsData;
}

export const getPreviousAndNext = (current: string) => {
	const posts = getPostsForSort();
	const currentIndex = posts.findIndex((post) => post.id === current);
	const previousPage = currentIndex === 0 ? null : posts[currentIndex - 1];
	const nextPage = currentIndex === posts.length - 1 ? null : posts[currentIndex + 1];
	return { previousPage: previousPage?.id ?? null, nextPage: nextPage?.id ?? null };
}

export type PostsForSort = {
	id: string;
	content: string;
	title: string;
}

export const getAllPostsIds = () => {
	const fileNames = fs.readdirSync(postsDirectory);
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
};

export const getPostData = async (id: string): Promise<PostType> => {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const matterResult = matter(fileContents);
	const processedContent = await remark()
		.use(html)
		.process(matterResult.content);
	const contentHtml = processedContent.toString();
	return {
		id,
		contentHtml,
		...(matterResult.data as MdExport),
	};
};

export type PostType = {
	id: string;
	contentHtml: string;
	title: string;
};

type MdExport = {
	title: string;
};
