import { motion } from 'framer-motion';
import { fadeUp, inViewProps, staggerContainer } from '../lib/animations';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <header className="relative overflow-hidden bg-hero-mesh pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="quiet-grid pointer-events-none absolute inset-0 opacity-60" />
      <motion.div
        {...inViewProps}
        variants={staggerContainer}
        className="page-shell relative text-center"
      >
        <motion.p variants={fadeUp} className="text-xs font-extrabold uppercase text-primary">
          {eyebrow}
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg"
        >
          {description}
        </motion.p>
      </motion.div>
    </header>
  );
}
