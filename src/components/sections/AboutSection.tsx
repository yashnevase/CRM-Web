import { ArrowRight, Check, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { Badge } from '../ui/Badge';
import { GlassCard } from '../ui/GlassCard';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function AboutSection() {
  const content = siteContent.about;
  return (
    <section className="section-space bg-surface" id="about" aria-labelledby="about-title">
      <div className="page-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div {...inViewProps} variants={fadeUp} className="relative mx-auto w-full max-w-xl">
          <div className="mac-glass overflow-hidden rounded-4xl p-3">
            <MediaPlaceholder
              label={content.imageAlt}
              className="aspect-[.95] w-full rounded-3xl"
            />
          </div>
          <GlassCard className="absolute -bottom-7 right-3 flex items-center gap-3 p-4 sm:right-8">
            <span className="rounded-2xl bg-accent-soft p-3 text-accent-strong">
              <HeartHandshake className="h-6 w-6" />
            </span>
            <p className="max-w-[120px] text-sm font-bold">{content.badge}</p>
          </GlassCard>
        </motion.div>
        <motion.div {...inViewProps} variants={staggerFast}>
          <motion.div variants={fadeUp}>
            <Badge>{content.eyebrow}</Badge>
            <h2
              id="about-title"
              className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl"
            >
              {content.title}
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">{content.description}</p>
          </motion.div>
          <motion.ul variants={staggerFast} className="mt-8 grid gap-4 sm:grid-cols-2">
            {content.features.map((feature) => (
              <motion.li
                variants={fadeUp}
                key={feature}
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="rounded-full bg-primary-soft p-1.5 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {feature}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp}>
            <Link
              to="/about"
              className="group focus-ring mt-9 inline-flex items-center gap-2 rounded-xl font-bold text-primary"
            >
              {siteContent.common.learn}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
