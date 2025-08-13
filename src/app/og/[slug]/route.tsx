import { ImageResponse } from 'next/og';
import { getProjectBySlug } from '@/lib/mdx';

export const runtime = 'edge';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1220',
          color: '#F8FAFC',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 48
        }}
      >
        <div style={{ fontSize: 48, fontFamily: 'JetBrains Mono' }}>{project.frontmatter.title}</div>
        <div style={{ fontSize: 24, color: '#94A3B8' }}>{project.frontmatter.summary}</div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
