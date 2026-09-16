import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/company';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { ServiceIcon } from '../ui/ServiceIcon';
import { ArrowUpRight } from 'lucide-react';

export function WhyChooseSection() {
  const content = siteContent.whyChoose;

  return (
    <section className="section-space relative overflow-hidden bg-primary-soft text-primary-dark">
      <div className="page-shell relative grid items-start gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-14 xl:gap-20">
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="text-xs font-extrabold uppercase text-primary-dark">{content.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl text-primary-dark">
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-primary-dark">
            {content.description}
          </p>
        </motion.div>
        <motion.div {...inViewProps} variants={staggerFast} className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <motion.article
              variants={fadeUp}
              key={item.title}
              className="interactive-card mac-glass group relative overflow-hidden rounded-3xl p-5 bg-primary text-white transition-colors duration-500 hover:bg-white hover:text-primary-dark sm:p-6"
            >
              <div className="relative z-10 flex items-start justify-between gap-4">
                <span className="font-display text-sm font-black text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white transition-all duration-500 group-hover:bg-primary-soft group-hover:text-primary">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <h3 className="text-xl font-bold leading-tight text-white transition-colors duration-500 group-hover:text-primary-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/75 transition-colors duration-500 group-hover:text-primary-dark/75">
                  {item.description}
                </p>
              </div>

              <span className="relative z-10 mt-7 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink transition-all duration-500 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
