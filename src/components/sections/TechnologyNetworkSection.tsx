import { motion } from 'framer-motion';
import { ArrowRight, LockKeyhole, Radio } from 'lucide-react';
import dashboardImage from '../../assets/images/optimized/technology-dashboard.jpg';
import { technologyCapabilities } from '../../data/company';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';

const workflow = ['Request', 'Map', 'Allocate', 'Track', 'Report'];

export function TechnologyNetworkSection() {
  const content = siteContent.technology;

  return (
    <section
      className="section-space relative overflow-hidden bg-surface"
      id="technology"
      aria-labelledby="technology-title"
    >
      <div className="quiet-grid pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-45" />
      <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[.82fr_1.18fr] xl:gap-20">
        <motion.div {...inViewProps} variants={fadeUp}>
          <SectionHeading
            id="technology-title"
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {workflow.map((item, index) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-primary/10 bg-primary-soft/60 px-3 py-2 text-[11px] font-extrabold text-primary-dark">
                  {item}
                </span>
                {index < workflow.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 text-primary/40" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mac-glass overflow-hidden rounded-[2.25rem] p-3 sm:p-5"
        >
          <MediaPlaceholder
            label="Healthcare operations dashboard"
            src={dashboardImage}
            className="mb-3 aspect-[2.35] w-full rounded-[1.45rem] object-[50%_44%]"
          />
          <div className="rounded-[1.65rem] border border-white/80 bg-white/70 p-4 shadow-card backdrop-blur-2xl sm:p-6">
            <div className="flex flex-col gap-4 border-b border-primary/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase text-muted">
                  {content.dashboardEyebrow}
                </p>
                <h3 className="mt-2 text-xl font-bold text-primary-dark sm:text-2xl">
                  {content.dashboardTitle}
                </h3>
              </div>
              <div className="flex items-center gap-2 self-start rounded-full bg-primary px-3 py-2 text-xs font-extrabold text-white">
                <Radio className="h-3.5 w-3.5" />
                {content.dashboardStatus}
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {technologyCapabilities.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="interactive-card flex h-full gap-3 rounded-2xl border border-primary/10 bg-white/70 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                    <ServiceIcon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-extrabold text-ink/80">{item.title}</h4>
                    <p className="mt-1 text-xs leading-5 text-muted">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-2xl border border-primary/10 bg-primary-soft/40 px-4 py-3 text-xs font-bold text-primary-dark">
              <LockKeyhole className="h-4 w-4 text-primary" />
              Prepared for secure client access, structured MIS and future integrations.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
