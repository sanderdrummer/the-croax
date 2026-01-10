import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "", "content");

export async function getMarkdownData(fileName: string) {
	const fullPath = path.join(contentDirectory, `${fileName}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const constMATTER = matter(fileContents);

	// Use remark to convert markdown into HTML string
	const processedContent = await remark()
		.use(html)
		.process(constMATTER.content);

	const contentHtml = processedContent.toString();

	return {
		contentHtml,
		...(constMATTER.data as {
			title: string;
			subtitle: string;
			image?: string;
			[key: string]: any;
		}),
	};
}
