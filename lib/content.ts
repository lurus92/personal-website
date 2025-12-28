import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';

export interface ContentItem {
  slug: string;
  content: string;
  data: Record<string, any>;
}

const BLOG_PATH = path.join(process.cwd(), 'content', 'blog');
const PROJECTS_PATH = path.join(process.cwd(), 'content', 'projects');

const renderMarkdown = async (content: string) => {
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  return processed.toString();
};

const getContentPath = (basePath: string, slug: string) => {
  const mdxPath = path.join(basePath, `${slug}.mdx`);
  if (fs.existsSync(mdxPath)) return mdxPath;

  const mdPath = path.join(basePath, `${slug}.md`);
  if (fs.existsSync(mdPath)) return mdPath;

  throw new Error(`Content file not found for slug: ${slug}`);
};

export function getAllPosts() {
  const files = fs.readdirSync(BLOG_PATH);
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const fullPath = path.join(BLOG_PATH, file);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContents);
      return { slug, data, content };
    })
    .sort((a, b) => (a.data.date > b.data.date ? -1 : 1));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = getContentPath(BLOG_PATH, realSlug);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const contentHtml = await renderMarkdown(content);

  return { slug: realSlug, frontmatter: data, content: contentHtml };
}

export function getAllProjects() {
  const files = fs.readdirSync(PROJECTS_PATH);
  return files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const fullPath = path.join(PROJECTS_PATH, file);
      const fileContents = fs.readFileSync(fullPath, 'utf-8');
      const { data, content } = matter(fileContents);
      return { slug, data, content };
    });
}

export async function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = getContentPath(PROJECTS_PATH, realSlug);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const contentHtml = await renderMarkdown(content);

  return { slug: realSlug, frontmatter: data, content: contentHtml };
}
