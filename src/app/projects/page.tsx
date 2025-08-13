import ProjectCard from '@/components/project-card';
import { getAllProjects } from '@/lib/mdx';
import { Metadata } from 'next';
import { motion, useReducedMotion } from 'framer-motion';

export const metadata: Metadata = {
  title: 'Projects - Wahdat Ullah'
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-8">
      <h1 className="font-mono text-3xl mb-8">Projects</h1>
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? {} : 'show'}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
      >
        {projects.map(p => (
          <motion.div key={p.slug} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
            <ProjectCard
              slug={p.slug}
              title={p.frontmatter.title}
              summary={p.frontmatter.summary}
              tags={p.frontmatter.tags}
              year={p.frontmatter.year}
              heroImage={p.frontmatter.heroImage}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
