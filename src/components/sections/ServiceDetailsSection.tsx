import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import preventiveImage from '../../assets/images/optimized/preventive-health-checkup.jpg';
import diagnosticsImage from '../../assets/images/optimized/diagnostic-lab.jpg';
import homeImage from '../../assets/images/optimized/home-healthcare.jpg';
import corporateImage from '../../assets/images/optimized/corporate-healthcare.jpg';
import occupationalImage from '../../assets/images/optimized/occupational-health.jpg';
import networkImage from '../../assets/images/optimized/healthcare-network.jpg';
import { services, type ServiceItem } from '../../data/services';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';
import { ServiceIcon } from '../ui/ServiceIcon';

const images: Partial<Record<ServiceItem['icon'], string>> = {
  clipboard: preventiveImage,
  flask: diagnosticsImage,
  home: homeImage,
  building: corporateImage,
  activity: occupationalImage,
  network: networkImage,
};

export function ServiceDetailsSection() {
  return (
    <section className="section-space bg-surface" aria-label="VitalSym service details">
      <motion.div
        {...inViewProps}
        variants={staggerFast}
        className="page-shell grid gap-6 lg:grid-cols-2"
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            className="soft-panel group overflow-hidden rounded-[2rem] p-3"
          >
            <MediaPlaceholder
              src={images[service.icon] ?? networkImage}
              label={service.mediaAlt ?? service.title}
              className="aspect-[2.1] w-full rounded-[1.4rem] transition duration-700 group-hover:scale-[1.02]"
            />
            <div className="p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-black uppercase tracking-[.12em] text-primary">
                    {service.index} · {service.tagline}
                  </p>
                </div>
              </div>
              <h2 className="mt-5 text-2xl font-bold text-primary-dark sm:text-3xl">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 rounded-xl bg-primary-soft/35 px-3 py-2.5 text-xs font-semibold leading-5 text-ink/80"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?source=${service.icon}-service`}
                className="focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-full bg-primary-dark px-5 text-sm font-bold text-white transition hover:bg-primary"
              >
                Enquire about this service <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
