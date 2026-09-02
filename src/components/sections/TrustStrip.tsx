import { motion } from 'framer-motion';
import { supportPoints } from '../../data/company';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { ServiceIcon } from '../ui/ServiceIcon';
import { MetricCounter } from '../ui/MetricCounter';

export function TrustStrip() {
  return (
    <section className="relative z-10" aria-label="Why clients can rely on us">
      <div className="page-shell">
        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mac-glass grid overflow-hidden rounded-3xl sm:grid-cols-2 xl:grid-cols-4"
        >
          {supportPoints.map((item) => (
            <motion.article
              variants={fadeUp}
              key={item.title}
              className="group border-b border-primary/10 p-5 last:border-b-0 sm:p-6 sm:[&:nth-child(odd)]:border-r xl:border-b-0 xl:border-r xl:last:border-r-0"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary transition duration-500 group-hover:-translate-y-1 group-hover:bg-primary group-hover:text-white">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="text-sm font-extrabold text-primary-dark">{item.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-muted">{item.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      <div className="page-shell mt-4">
        <div className="soft-panel grid grid-cols-3 gap-3 rounded-3xl px-4 py-5 sm:gap-6 sm:px-8">
          <MetricCounter value={50000} suffix="+" label="Lives covered" />
          <MetricCounter value={500} suffix="+" label="Diagnostic partners" />
          <MetricCounter value={99.4} decimals={1} suffix="%" label="SLA adherence" />
        </div>
      </div>
    </section>
  );
}
