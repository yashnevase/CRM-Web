import {
  ArrowUpRight,
  CalendarDays,
  Check,
  MonitorCheck,
  Network,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerContainer } from '../../lib/animations';
import { Badge } from '../ui/Badge';
import { GlassCard } from '../ui/GlassCard';
import { Avatar } from '../ui/Avatar';
import { CountUp } from '../ui/CountUp';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

const proofAvatars = [
  'https://picsum.photos/seed/proof-one/100/100',
  'https://picsum.photos/seed/proof-two/100/100',
  'https://picsum.photos/seed/proof-three/100/100',
];

export function Hero() {
  const content = siteContent.hero;
  return (
    <section
      className="relative overflow-hidden bg-hero-mesh pb-24 pt-32 sm:pt-36 lg:min-h-[760px] lg:pb-28"
      aria-labelledby="hero-title"
    >
      <div className="quiet-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="page-shell relative grid items-center gap-14 lg:grid-cols-[1.03fr_.97fr] lg:gap-12">
        <motion.div {...inViewProps} variants={staggerContainer}>
          <motion.div variants={fadeUp}>
            <Badge icon={<Star className="h-3.5 w-3.5 fill-current" />}>{content.eyebrow}</Badge>
          </motion.div>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {content.title} <span className="text-primary">{content.accent}</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg"
          >
            {content.description}
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
            {content.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm font-semibold">
                <span className="rounded-full bg-accent-soft p-1 text-accent-strong">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {feature}
              </li>
            ))}
          </motion.ul>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-extrabold text-ink shadow-glow transition duration-500 hover:scale-[1.025] hover:bg-accent-strong"
            >
              {siteContent.common.book}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-primary/20 bg-white/50 px-6 text-sm font-bold backdrop-blur transition hover:bg-white"
            >
              {content.secondaryCta}
            </Link>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {proofAvatars.map((src, index) => (
                <Avatar
                  key={src}
                  src={src}
                  alt={`Patient reviewer ${index + 1}`}
                  className="h-10 w-10"
                />
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-accent-strong">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs font-semibold text-muted">{content.reviews}</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.75 }}
          className="relative mx-auto w-full max-w-[580px]"
        >
          <div className="mac-glass overflow-hidden rounded-4xl p-3">
            <MediaPlaceholder
              label={content.imageAlt}
              className="aspect-[.88] w-full rounded-[1.6rem]"
            />
          </div>
          <motion.div
            animate={{ y: [-4, 5, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-3 top-[18%] sm:-left-9"
          >
            <GlassCard className="flex items-center gap-3 p-4">
              <span className="rounded-2xl bg-accent-soft p-3 text-accent-strong">
                <MonitorCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted">{content.badges.score}</p>
                <p className="mt-1 font-display text-xl font-extrabold">
                  <CountUp target={98} suffix="%" />
                </p>
              </div>
            </GlassCard>
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-4 top-6"
          >
            <GlassCard className="hidden items-center gap-3 p-4 sm:flex">
              <span className="rounded-2xl bg-primary p-3 text-white">
                <Network className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted">Network status</p>
                <p className="mt-1 text-sm font-bold">Mapped and ready</p>
              </div>
            </GlassCard>
          </motion.div>
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 right-0 sm:right-5"
          >
            <GlassCard className="flex items-center gap-3 p-4">
              <span className="rounded-2xl bg-primary-soft p-3 text-primary">
                <CalendarDays className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs text-muted">{content.badges.availability}</p>
                <p className="mt-1 text-sm font-bold">{content.badges.today}</p>
              </div>
              <ShieldCheck className="h-4 w-4 text-accent-strong" />
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
