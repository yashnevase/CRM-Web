import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { corporateReasons, individualActions } from '../../data/company';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { ServiceIcon } from '../ui/ServiceIcon';

export function AudienceSection() {
  const content = siteContent.audience;

  return (
    <section className="section-space bg-canvas" aria-labelledby="audience-title">
      <div className="page-shell">
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-[1.05fr_.95fr] lg:items-end"
        >
          <div>
            <p className="text-xs font-extrabold uppercase text-primary">{content.eyebrow}</p>
            <h2
              id="audience-title"
              className="mt-3 max-w-3xl text-3xl font-bold leading-[1.08] text-primary-dark sm:text-4xl lg:text-5xl"
            >
              {content.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted lg:justify-self-end">
            {content.description}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.18fr_.82fr]">
          <motion.article
            {...inViewProps}
            variants={fadeUp}
            id="corporate-healthcare"
            className="rounded-[2rem] bg-primary p-6 text-white shadow-glass sm:p-8"
          >
            <p className="text-xs font-extrabold uppercase text-accent-soft">
              {content.corporate.eyebrow}
            </p>
            <h3 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              {content.corporate.title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/78">
              {content.corporate.description}
            </p>

            <motion.div
              {...inViewProps}
              variants={staggerFast}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {corporateReasons.map((item) => (
                <motion.div
                  variants={fadeUp}
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-xl"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
                      <ServiceIcon name={item.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold">{item.title}</h4>
                      <p className="mt-1.5 text-xs leading-5 text-white/72">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link
              to="/contact?source=corporate-healthcare"
              className="focus-ring mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              {content.corporate.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.article>

          <motion.article
            {...inViewProps}
            variants={fadeUp}
            className="soft-panel rounded-[2rem] p-6 sm:p-8"
          >
            <p className="text-xs font-extrabold uppercase text-primary">
              {content.individuals.eyebrow}
            </p>
            <h3 className="mt-3 text-3xl font-bold leading-tight text-primary-dark">
              {content.individuals.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-muted">{content.individuals.description}</p>
            <p className="mt-6 rounded-2xl bg-primary-soft px-4 py-3 text-sm font-extrabold text-primary-dark">
              {content.individuals.statement}
            </p>

            <div className="mt-6 grid gap-3">
              {individualActions.map((item) => (
                <Link
                  key={item.title}
                  to={`/contact?source=${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="focus-ring group rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                      <ServiceIcon name={item.icon} className="h-4 w-4" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-primary-dark">{item.title}</h4>
                      <p className="mt-1.5 text-xs leading-5 text-muted">{item.description}</p>
                    </div>
                    <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-primary/45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
