import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services, type ServiceItem } from '../../data/services';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { cn } from '../../lib/cn';
import { IconCircle } from '../ui/IconCircle';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function ServicesGrid() {
  return (
    <section className="section-space bg-surface" id="services" aria-labelledby="services-title">
      <div className="page-shell">
        <motion.div
          {...inViewProps}
          variants={fadeUp}
          className="grid gap-6 lg:grid-cols-[1fr_.72fr] lg:items-end"
        >
          <SectionHeading
            id="services-title"
            eyebrow={siteContent.services.eyebrow}
            title={siteContent.services.title}
            description={siteContent.services.description}
          />
          <div className="hidden rounded-3xl border border-primary/10 bg-primary-soft/45 p-6 lg:block">
            <p className="text-sm font-bold leading-7 text-primary-dark">
              Built as modular service areas, so final client copy and real photography can be
              swapped in without redesigning the page.
            </p>
          </div>
        </motion.div>
        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mt-12 grid auto-rows-[minmax(260px,auto)] gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const media = service.variant === 'media';
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className={cn(
        'interactive-card group relative flex overflow-hidden rounded-3xl p-6 shadow-card sm:p-7',
        service.size === 'wide' && 'xl:col-span-2',
        service.variant === 'primary' && 'bg-primary text-white',
        service.variant === 'accent' && 'bg-accent text-primary-dark',
        service.variant === 'light' && 'border border-line/70 bg-surface',
        media && 'text-white',
      )}
    >
      {media && (
        <>
          <MediaPlaceholder
            label={service.mediaAlt ?? `${service.title} photography`}
            kind={service.icon === 'flask' ? 'lab' : 'care'}
            className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/70 to-primary/5" />
        </>
      )}
      <div className="relative z-10 flex w-full flex-col items-start">
        <div className="flex w-full items-center justify-between">
          <span
            className={cn(
              'font-display text-sm font-bold',
              media ? 'text-white/65' : 'text-primary/55',
            )}
          >
            {service.index}
          </span>
          <IconCircle
            dark={media || service.variant === 'primary'}
            className={service.variant === 'accent' ? 'bg-primary-dark/10 text-primary-dark' : ''}
          >
            <ServiceIcon name={service.icon} />
          </IconCircle>
        </div>
        <div className="mt-auto pt-8">
          <h3 className="max-w-sm text-2xl font-bold leading-tight">{service.title}</h3>
          <p
            className={cn(
              'mt-3 max-w-md text-sm leading-6',
              service.variant === 'light' ? 'text-muted' : 'text-current opacity-80',
            )}
          >
            {service.description}
          </p>
          <Link
            to="/contact"
            className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-bold"
          >
            {siteContent.services.cardLink}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
