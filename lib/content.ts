import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface ContentItem {
  slug: string;
  content: string;
  data: Record<string, any>;
}

const BLOG_PATH = path.join(process.cwd(), 'content', 'blog');
const PROJECTS_PATH = path.join(process.cwd(), 'content', 'projects');

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
  const fullPath = path.join(BLOG_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  // @ts-expect-error Type definitions for remark plugins are slightly misaligned
  const processed = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processed.toString();

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
  const fullPath = path.join(PROJECTS_PATH, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  // @ts-expect-error Type definitions for remark plugins are slightly misaligned
  const processed = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processed.toString();

  return { slug: realSlug, frontmatter: data, content: contentHtml };
}
