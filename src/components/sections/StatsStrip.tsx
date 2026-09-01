import { motion } from 'framer-motion';
import { stats } from '../../data/stats';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { GlassCard } from '../ui/GlassCard';
import { StatCard } from '../ui/StatCard';

export function StatsStrip() {
  return (
    <section className="relative z-10 -mt-16" aria-label="Our impact">
      <div className="page-shell">
        <GlassCard>
          <motion.div
            {...inViewProps}
            variants={staggerFast}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <motion.div variants={fadeUp} key={stat.label}>
                <StatCard {...stat} />
              </motion.div>
            ))}
          </motion.div>
        </GlassCard>
      </div>
    </section>
  );
}
