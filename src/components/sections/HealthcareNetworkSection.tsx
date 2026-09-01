import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { networkPartners } from '../../data/company';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { ServiceIcon } from '../ui/ServiceIcon';

export function HealthcareNetworkSection() {
  const content = siteContent.network;

  return (
    <section className="section-space bg-canvas" id="network" aria-labelledby="network-title">
      <div className="page-shell">
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-extrabold uppercase text-primary">{content.eyebrow}</p>
            <h2
              id="network-title"
              className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl"
            >
              {content.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            {content.description}
          </p>
        </motion.div>

        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {networkPartners.map((item, index) => (
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -5 }}
              key={item.title}
              className="mac-glass group rounded-3xl p-6 transition duration-500 hover:bg-white/80"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-primary/50">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-card">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-9 text-xl font-bold text-primary-dark">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              <ArrowUpRight className="mt-6 h-4 w-4 text-primary/40 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
