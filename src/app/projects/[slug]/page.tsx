import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx';
import MdxRenderer from '@/components/mdx-renderer';
import { Metadata } from 'next';

interface Params {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getProjectSlugs().map(slug => ({ slug: slug.replace(/\.mdx$/, '') }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  return {
    title: `${project.frontmatter.title} - Project`,
    openGraph: {
      images: [`/og/${params.slug}`]
    }
  };
}

export default async function ProjectPage({ params }: Params) {
  const project = await getProjectBySlug(params.slug);
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{project.frontmatter.title}</h1>
      <MdxRenderer source={project.source} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: project.frontmatter.title,
            author: { '@type': 'Person', name: 'Wahdat Ullah' }
          })
        }}
      />
    </article>
  );
}
