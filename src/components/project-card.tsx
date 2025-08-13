import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: number;
  heroImage?: string;
}

export default function ProjectCard({ slug, title, summary, tags, year, heroImage }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      className="rounded-lg bg-white/5 p-4 backdrop-blur-md shadow-sm"
    >
      <Link href={`/projects/${slug}`} className="block focus:outline-none focus:ring-2 focus:ring-primary">
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            width={400}
            height={160}
            className="mb-2 h-40 w-full rounded object-cover"
          />
        )}
        <h3 className="font-mono text-xl text-primary">
          {title} <span className="text-muted text-sm">{year}</span>
        </h3>
        <p className="text-sm text-muted mb-2">{summary}</p>
        <div className="flex flex-wrap gap-1">
          {tags.map(tag => (
            <span key={tag} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
