import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerContainer } from '../../lib/animations';

export function CTASection() {
  return (
    <section className="bg-surface py-10 sm:py-14" aria-labelledby="cta-title">
      <div className="page-shell max-w-none px-0 sm:px-8">
        <motion.div
          {...inViewProps}
          variants={staggerContainer}
          className="diagonal-lines relative overflow-hidden bg-primary px-6 py-14 text-center text-white shadow-glass sm:rounded-[2.5rem] sm:px-10 lg:py-20"
        >
          <motion.p
            variants={fadeUp}
            className="relative text-xs font-extrabold uppercase text-white/78"
          >
            {siteContent.cta.eyebrow}
          </motion.p>
          <motion.h2
            id="cta-title"
            variants={fadeUp}
            className="relative mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
          >
            {siteContent.cta.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-5 max-w-xl text-base leading-7 text-white/78"
          >
            {siteContent.cta.description}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-extrabold text-ink shadow-glow transition duration-500 hover:scale-[1.025]"
            >
              {siteContent.common.book}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 text-sm font-extrabold text-white backdrop-blur-xl transition duration-500 hover:bg-white/20"
            >
              {siteContent.common.partner}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
