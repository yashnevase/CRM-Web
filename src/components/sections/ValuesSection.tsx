import { motion } from 'framer-motion';
import { coreValues } from '../../data/company';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';

export function ValuesSection() {
  return (
    <section className="section-space bg-surface" aria-labelledby="values-title">
      <div className="page-shell">
        <motion.div {...inViewProps} variants={fadeUp}>
          <SectionHeading
            id="values-title"
            align="center"
            eyebrow={siteContent.values.eyebrow}
            title={siteContent.values.title}
            description={siteContent.values.description}
          />
        </motion.div>

        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {coreValues.map((item) => (
            <motion.article
              variants={fadeUp}
              key={item.title}
              className="interactive-card soft-panel flex gap-4 rounded-3xl p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent-strong">
                <ServiceIcon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-primary-dark">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
