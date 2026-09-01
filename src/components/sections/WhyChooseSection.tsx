import { motion } from 'framer-motion';
import { whyChooseUs } from '../../data/company';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { ServiceIcon } from '../ui/ServiceIcon';

export function WhyChooseSection() {
  const content = siteContent.whyChoose;

  return (
    <section className="section-space relative overflow-hidden bg-deep-gradient text-white">
      <div className="diagonal-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="page-shell relative grid gap-12 lg:grid-cols-[.72fr_1.28fr] xl:gap-20">
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <p className="text-xs font-extrabold uppercase text-white/78">{content.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/78">{content.description}</p>
        </motion.div>

        <motion.div {...inViewProps} variants={staggerFast} className="grid gap-4 sm:grid-cols-2">
          {whyChooseUs.map((item, index) => (
            <motion.article
              variants={fadeUp}
              key={item.title}
              className="glass-dark interactive-card rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">{item.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
