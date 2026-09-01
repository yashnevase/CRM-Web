import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { services, type ServiceItem } from '../../data/services';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { cn } from '../../lib/cn';
import { IconCircle } from '../ui/IconCircle';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function ServicesGrid() {
  return <section className="section-space bg-canvas" id="services" aria-labelledby="services-title"><div className="page-shell"><motion.div {...inViewProps} variants={fadeUp}><SectionHeading eyebrow={siteContent.services.eyebrow} title={siteContent.services.title} description={siteContent.services.description} /></motion.div><motion.div {...inViewProps} variants={staggerFast} className="mt-12 grid auto-rows-[290px] gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} service={service} />)}</motion.div></div></section>;
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const image = service.variant === 'image';
  return <motion.article variants={fadeUp} whileHover={{ y: -5 }} className={cn('group relative flex overflow-hidden rounded-3xl p-7 shadow-card transition-shadow duration-500 hover:shadow-glass', service.size === 'wide' && 'lg:col-span-2', service.variant === 'primary' && 'bg-primary text-white', service.variant === 'accent' && 'bg-accent text-primary-dark', service.variant === 'light' && 'border border-line/70 bg-surface', image && 'text-white')}>
    {image && <><MediaPlaceholder label={`${service.title} care environment`} kind={service.icon === 'flask' ? 'lab' : 'care'} className="absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/45 to-transparent" /></>}
    <div className="relative z-10 flex w-full flex-col items-start"><IconCircle dark={image || service.variant === 'primary'} className={service.variant === 'accent' ? 'bg-primary-dark/10 text-primary-dark' : ''}><ServiceIcon name={service.icon} /></IconCircle><div className="mt-auto"><h3 className="text-2xl font-bold">{service.title}</h3><p className={cn('mt-3 max-w-md text-sm leading-6', service.variant === 'light' ? 'text-muted' : 'text-current opacity-70')}>{service.description}</p><a href="#service-detail" className="focus-ring mt-5 inline-flex items-center gap-2 rounded-lg text-sm font-bold">{siteContent.services.cardLink}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a></div></div>
  </motion.article>;
}
