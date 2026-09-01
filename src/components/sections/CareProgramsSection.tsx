import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carePrograms, type CareProgram } from '../../data/services';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { cn } from '../../lib/cn';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';

export function CareProgramsSection() {
  return (
    <section className="section-space bg-cream" aria-labelledby="care-delivery-title">
      <div className="page-shell">
        <motion.div {...inViewProps} variants={fadeUp}>
          <SectionHeading
            id="care-delivery-title"
            eyebrow={siteContent.careDelivery.eyebrow}
            title={siteContent.careDelivery.title}
            description={siteContent.careDelivery.description}
          />
        </motion.div>

        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          {carePrograms.map((program, index) => (
            <CareProgramCard key={program.anchor} program={program} featured={index === 2} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CareProgramCard({ program, featured }: { program: CareProgram; featured: boolean }) {
  const dark = program.tone === 'primary';

  return (
    <motion.article
      id={program.anchor}
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className={cn(
        'group overflow-hidden rounded-[2rem] border p-3 shadow-card transition-shadow duration-500 hover:shadow-glass',
        featured && 'lg:col-span-2 lg:grid lg:grid-cols-[.78fr_1.22fr] lg:gap-3',
        dark && 'border-primary bg-primary text-white',
        program.tone === 'light' && 'border-white bg-white/80',
        program.tone === 'accent' && 'border-accent/30 bg-accent-soft',
      )}
    >
      <MediaPlaceholder
        label={program.mediaAlt}
        kind={program.icon === 'home' ? 'person' : 'care'}
        className={cn(
          'aspect-[1.75] w-full rounded-[1.4rem]',
          featured && 'lg:aspect-auto lg:h-full lg:min-h-[360px]',
        )}
      />

      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-2xl',
              dark ? 'bg-white/10 text-white' : 'bg-white text-primary shadow-card',
            )}
          >
            <ServiceIcon name={program.icon} className="h-5 w-5" />
          </span>
          <p
            className={cn(
              'text-[11px] font-extrabold uppercase',
              dark ? 'text-white/60' : 'text-primary',
            )}
          >
            {program.eyebrow}
          </p>
        </div>

        <h3 className="mt-6 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
          {program.title}
        </h3>
        <p
          className={cn('mt-4 max-w-2xl text-sm leading-6', dark ? 'text-white/70' : 'text-muted')}
        >
          {program.description}
        </p>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {program.services.map((service) => (
            <li key={service} className="flex items-center gap-2.5 text-sm font-semibold">
              <span
                className={cn(
                  'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                  dark ? 'bg-white/10 text-accent' : 'bg-white text-primary shadow-card',
                )}
              >
                <Check className="h-3.5 w-3.5" />
              </span>
              {service}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className={cn(
            'focus-ring mt-7 inline-flex items-center gap-2 rounded-xl text-sm font-extrabold',
            dark ? 'text-accent' : 'text-primary',
          )}
        >
          {siteContent.common.talk}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.article>
  );
}
