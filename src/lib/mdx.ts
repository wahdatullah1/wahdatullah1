import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

export interface ProjectFrontmatter {
  title: string;
  summary: string;
  tags: string[];
  year: number;
  stack?: string[];
  heroImage?: string;
  links?: { demo?: string; repo?: string };
  outcomes?: string[];
  role?: string;
}

const projectsDir = path.join(process.cwd(), 'src/content/projects');

export function getProjectSlugs() {
  return fs.readdirSync(projectsDir).filter(f => f.endsWith('.mdx'));
}

export async function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(projectsDir, `${realSlug}.mdx`);
  const file = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(file);
  const mdxSource = await serialize(content, {
    mdxOptions: { remarkPlugins: [remarkGfm] }
  });
  return { slug: realSlug, frontmatter: data as ProjectFrontmatter, source: mdxSource };
}

export async function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(slugs.map(slug => getProjectBySlug(slug)));
  return projects.sort((a, b) => b.frontmatter.year - a.frontmatter.year);
}
