import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

export interface ProjectMeta {
  slug: string;
  name: string;
  status: string;
  tags: string[];
  summary: string;
  techStack?: string[];
}

export interface Project extends ProjectMeta {
  contentHtml: string;
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory).filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const fullPath = path.join(projectsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = remark().use(html).processSync(content);
  const contentHtml = processedContent.toString();

  return {
    slug: realSlug,
    name: data.name,
    status: data.status,
    tags: data.tags || [],
    summary: data.summary,
    techStack: data.techStack || [],
    contentHtml,
  };
}

export function getAllProjects(): ProjectMeta[] {
  const slugs = getProjectSlugs();
  const projects = slugs.map((slug) => getProjectBySlug(slug));
  return projects.sort((a, b) => a.name.localeCompare(b.name)).map(({ contentHtml, ...meta }) => meta);
}
