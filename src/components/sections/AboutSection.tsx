import { motion } from 'framer-motion';
import { ArrowRight, Check, HeartHandshake, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImage from '../../assets/images/optimized/about-care-coordination.jpg';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { MediaPlaceholder } from '../ui/MediaPlaceholder';

export function AboutSection() {
  const content = siteContent.about;

  return (
    <section className="section-space bg-surface" id="about" aria-labelledby="about-title">
      <div className="page-shell grid items-center gap-14 lg:grid-cols-[.92fr_1.08fr] xl:gap-24">
        <motion.div {...inViewProps} variants={fadeUp} className="relative mx-auto w-full max-w-xl">
          <div className="mac-glass overflow-hidden rounded-[2.4rem] p-3">
            <MediaPlaceholder
              label={content.visualLabel}
              src={aboutImage}
              className="aspect-[1.02] w-full rounded-[1.8rem]"
            />
          </div>
          <div className="glass absolute -bottom-8 right-3 max-w-[245px] rounded-2xl p-4 sm:right-8">
            <p className="text-[10px] font-extrabold uppercase text-primary">What we do</p>
            <p className="mt-2 font-display text-sm font-bold leading-5 text-primary-dark">
              Healthcare + Technology + Operations
            </p>
          </div>
        </motion.div>

        <motion.div {...inViewProps} variants={staggerFast}>
          <motion.div variants={fadeUp}>
            <p className="text-xs font-extrabold uppercase text-primary">{content.eyebrow}</p>
            <h2
              id="about-title"
              className="mt-4 max-w-3xl text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl"
            >
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {content.description}
            </p>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            className="mt-7 border-l-2 border-accent pl-5 font-display text-lg font-bold leading-7 text-primary-dark"
          >
            {content.statement}
          </motion.blockquote>

          <motion.ul variants={staggerFast} className="mt-7 grid gap-3 sm:grid-cols-2">
            {content.capabilities.map((capability) => (
              <motion.li
                variants={fadeUp}
                key={capability}
                className="flex items-center gap-3 text-sm font-semibold text-ink/80"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {capability}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="/about"
              className="group focus-ring inline-flex items-center gap-2 rounded-xl text-sm font-extrabold text-primary"
            >
              Learn more about LifeMed Connect
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        {...inViewProps}
        variants={staggerFast}
        className="page-shell mt-12 grid gap-5 md:grid-cols-2 lg:mt-14"
      >
        <PurposeCard icon={Target} title={content.mission.title} text={content.mission.text} />
        <PurposeCard
          icon={HeartHandshake}
          title={content.vision.title}
          text={content.vision.text}
        />
      </motion.div>
    </section>
  );
}

function PurposeCard({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Target;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      className="
        interactive-card
        mac-glass
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-primary
        p-5
        text-white
        shadow-[0_12px_35px_rgba(20,60,90,0.14)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:bg-primary
        hover:shadow-[0_20px_50px_rgba(20,60,90,0.20)]
        sm:p-6
      "
    >
      <span
        className="
          flex h-12 w-12 items-center justify-center
          rounded-2xl
          bg-white/95
          text-primary
          shadow-[0_6px_18px_rgba(0,0,0,0.08)]
          transition-all duration-500
          group-hover:scale-105
          group-hover:bg-accent
          group-hover:text-white
        "
      >
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>

      <p className="mt-3 max-w-xl text-sm leading-6 text-white/75">{text}</p>
    </motion.article>
  );
}
