import { getAllProjects } from '@/lib/mdx';

export async function GET() {
  const projects = await getAllProjects();
  return Response.json(
    projects.map(p => ({ slug: p.slug, title: p.frontmatter.title, tags: p.frontmatter.tags }))
  );
}
