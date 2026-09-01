import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { carePrograms } from '../../data/programs';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { IconCircle } from '../ui/IconCircle';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';

export function CareProgramsSection() {
  return (
    <section className="section-space bg-cream" id="corporate" aria-labelledby="programs-title">
      <div className="page-shell">
        <motion.div {...inViewProps} variants={fadeUp}>
          <SectionHeading
            eyebrow={siteContent.programs.eyebrow}
            title={siteContent.programs.title}
            description={siteContent.programs.description}
          />
        </motion.div>
        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {carePrograms.map((program) => (
            <motion.article
              key={program.title}
              id={program.anchor}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="mac-glass group rounded-3xl p-7 transition duration-500 hover:bg-white/80"
            >
              <div className="flex items-center justify-between">
                <IconCircle>
                  <ServiceIcon name={program.icon} />
                </IconCircle>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent-strong">
                  {program.audience}
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-bold">{program.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{program.description}</p>
              <ul className="mt-6 space-y-3">
                {program.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-sm font-semibold text-ink/80"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="focus-ring mt-7 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-primary"
              >
                {siteContent.common.talk}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
