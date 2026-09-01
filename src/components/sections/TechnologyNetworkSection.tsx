import { Activity, GitBranch, MapPin, MonitorCheck, ShieldCheck, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import { technologyCapabilities } from '../../data/programs';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { Badge } from '../ui/Badge';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';

const dashboardIcons = [Workflow, MapPin, GitBranch, Activity, MonitorCheck, ShieldCheck];

export function TechnologyNetworkSection() {
  return (
    <section
      className="section-space bg-surface"
      id="technology"
      aria-labelledby="technology-title"
    >
      <div className="page-shell grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
        <motion.div {...inViewProps} variants={fadeUp}>
          <SectionHeading
            eyebrow={siteContent.technology.eyebrow}
            title={siteContent.technology.title}
            description={siteContent.technology.description}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {siteContent.technology.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </motion.div>
        <motion.div
          {...inViewProps}
          variants={staggerFast}
          className="mac-glass quiet-grid rounded-4xl p-4 sm:p-6"
        >
          <div className="rounded-3xl border border-white/70 bg-white/65 p-4 shadow-card backdrop-blur-2xl">
            <div className="flex items-center justify-between border-b border-line/50 pb-4">
              <div>
                <p className="text-xs font-bold text-muted">Operations cockpit</p>
                <h3 className="mt-1 font-display text-xl font-bold text-primary-dark">
                  Connected care workflow
                </h3>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                Live
              </span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {technologyCapabilities.map((item, index) => {
                const Icon = dashboardIcons[index];
                return (
                  <motion.div key={item} variants={fadeUp}>
                    <GlassCard className="flex items-center gap-3 rounded-2xl p-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-bold text-ink/80">{item}</span>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
