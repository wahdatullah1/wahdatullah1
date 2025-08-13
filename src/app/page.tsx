import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';

const KubeBackground = dynamic(() => import('@/components/kube-background'), {
  ssr: false,
  loading: () => null
});

export default function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <section className="relative flex flex-col items-center justify-center py-24 text-center">
      {!shouldReduceMotion && <KubeBackground />}
      <motion.h1
        className="text-4xl font-mono mb-4"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        DevOps & Cloud Engineer
      </motion.h1>
      <p className="text-muted max-w-xl mb-8">
        Building reliable infrastructure and secure cloud-native systems.
      </p>
      <div className="flex gap-4">
        <Link href="/projects" className="btn bg-primary text-background">
          View Projects
        </Link>
        <a href="/resume.pdf" className="btn border border-primary text-primary">
          Download Resume
        </a>
        <Link href="/contact" className="btn bg-accent text-background">
          Contact
        </Link>
      </div>
    </section>
  );
}
