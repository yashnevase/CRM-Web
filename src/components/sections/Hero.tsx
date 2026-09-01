import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Check,
  HeartPulse,
  MapPinned,
  Network,
  ShieldCheck,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/optimized/hero-healthcare-professional.jpg';
import { siteContent } from '../../data/site-content';
import { fadeUp, staggerContainer } from '../../lib/animations';
import { GlassCard } from '../ui/GlassCard';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';
import { ServiceIcon } from '../ui/ServiceIcon';

export function Hero() {
  const content = siteContent.hero;

  return (
    <section
      className="frosted-stage relative overflow-hidden pb-12 pt-28 sm:pt-32 lg:min-h-[760px] lg:pb-16 lg:pt-32"
      aria-labelledby="hero-title"
    >
      <div className="quiet-grid pointer-events-none absolute inset-0 opacity-55" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/90" />

      <div className="page-shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(430px,.86fr)] xl:gap-14">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.p
              variants={fadeUp}
              className="max-w-sm text-xs font-extrabold uppercase text-primary-dark/70"
            >
              {content.eyebrow}
            </motion.p>

            <motion.h1
              id="hero-title"
              variants={fadeUp}
              className="mt-5 max-w-4xl text-5xl font-black leading-none text-primary-dark sm:text-6xl lg:text-7xl"
            >
              {content.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-3xl font-display text-2xl font-bold leading-tight text-ink sm:text-3xl lg:text-4xl"
            >
              {content.accent}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-base font-medium leading-8 text-ink/76 sm:text-lg"
            >
              {content.description}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 hidden max-w-2xl text-sm leading-7 text-muted sm:block"
            >
              {content.supportingText}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/services"
                className="focus-ring group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-dark px-6 py-3.5 text-sm font-extrabold text-white shadow-glass transition duration-500 hover:-translate-y-0.5 hover:bg-primary"
              >
                {siteContent.common.explore}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-primary/18 bg-white px-6 py-3.5 text-sm font-extrabold text-primary-dark shadow-card backdrop-blur-xl transition duration-500 hover:-translate-y-0.5 hover:border-primary/30"
              >
                {siteContent.common.partner}
              </Link>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-9 hidden flex-wrap gap-3 sm:flex">
              {content.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 rounded-full border border-primary/10 bg-white/[.46] px-3.5 py-2 text-xs font-bold text-ink/75 backdrop-blur-lg"
                >
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {feature}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto hidden w-full max-w-[560px] sm:block"
          >
            <div className="mac-glass overflow-hidden rounded-[2.4rem] p-3 sm:p-4">
              <MediaPlaceholder
                label={content.visualLabel}
                kind="person"
                src={heroImage}
                loading="eager"
                className="aspect-[1.28] w-full rounded-[1.8rem] object-[50%_22%] lg:aspect-[.9]"
              />
            </div>

            <FloatingBadge className="left-3 top-[14%] sm:-left-5" delay={0}>
              <ShieldCheck className="h-5 w-5 text-accent-strong" />
              <span>{content.badges.technology}</span>
            </FloatingBadge>

            <FloatingBadge className="right-3 top-8 sm:-right-4" delay={0.45}>
              <MapPinned className="h-5 w-5 text-primary" />
              <span>{content.badges.network}</span>
            </FloatingBadge>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-5 left-5 right-5 hidden sm:left-12 sm:right-12 sm:block"
            >
              <GlassCard className="flex items-center justify-between gap-3 rounded-2xl px-4 py-3.5 sm:px-5">
                <div className="flex -space-x-2">
                  {[HeartPulse, Building2, Network].map((Icon, index) => (
                    <span
                      key={index}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-primary-soft text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  ))}
                </div>
                <p className="text-right text-xs font-extrabold text-primary-dark sm:text-sm">
                  {content.badges.services}
                </p>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-10 grid grid-cols-3 gap-2 sm:gap-4 lg:-mt-2 lg:max-w-[86%]"
        >
          {content.serviceTiles.map((tile, index) => (
            <motion.div
              variants={fadeUp}
              key={tile}
              className={`interactive-card mac-glass group flex min-h-[116px] flex-col justify-between overflow-hidden rounded-3xl p-3 transition-colors duration-500 sm:min-h-[138px] sm:flex-row sm:items-end sm:p-5 ${
                index === 2
                  ? 'bg-primary text-white hover:bg-accent hover:text-primary-dark'
                  : 'hover:bg-primary hover:text-white'
              }`}
            >
              <Link
                to={index === 1 ? '/#home-care' : index === 2 ? '/#corporate' : '/services'}
                className="absolute inset-0 z-20 rounded-3xl focus-ring"
                aria-label={`View ${tile}`}
              />
              <div className="relative z-10">
                <span
                  className={`mb-4 flex h-9 w-9 items-center justify-center rounded-full sm:mb-5 sm:h-11 sm:w-11 ${
                    index === 2
                      ? 'bg-white text-primary group-hover:bg-primary-dark group-hover:text-white'
                      : 'bg-primary-soft text-primary group-hover:bg-white group-hover:text-primary'
                  }`}
                >
                  <ServiceIcon
                    name={index === 0 ? 'clipboard' : index === 1 ? 'home' : 'building'}
                  />
                </span>
                <h2 className="text-sm font-bold leading-tight sm:max-w-[13rem] sm:text-xl">
                  {tile}
                </h2>
              </div>
              <span
                className={`ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-500 group-hover:rotate-45 sm:h-12 sm:w-12 ${
                  index === 2
                    ? 'bg-white text-primary group-hover:bg-primary-dark group-hover:text-white'
                    : 'bg-accent text-ink'
                }`}
              >
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FloatingBadge({
  children,
  className,
  delay,
}: {
  children: ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 5.6, delay, repeat: Infinity, ease: 'easeInOut' }}
      className={`absolute ${className}`}
    >
      <GlassCard className="flex items-center gap-2.5 rounded-2xl px-4 py-3 text-xs font-extrabold text-primary-dark sm:text-sm">
        {children}
      </GlassCard>
    </motion.div>
  );
}
