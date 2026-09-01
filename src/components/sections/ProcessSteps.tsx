import { CalendarCheck, ClipboardCheck, MessageCircleHeart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/process-steps';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerContainer } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';

const icons = {
  message: MessageCircleHeart,
  calendar: CalendarCheck,
  clipboard: ClipboardCheck,
  sparkles: Sparkles,
};

export function ProcessSteps() {
  return (
    <section
      className="section-space relative overflow-hidden bg-deep-gradient"
      aria-labelledby="process-title"
    >
      <div className="quiet-grid absolute inset-0 opacity-20" />
      <div className="page-shell relative">
        <motion.div {...inViewProps} variants={fadeUp}>
          <SectionHeading
            id="process-title"
            dark
            eyebrow={siteContent.process.eyebrow}
            title={siteContent.process.title}
            description={siteContent.process.description}
          />
        </motion.div>
        <motion.ol
          {...inViewProps}
          variants={staggerContainer}
          className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute left-[12.5%] right-[12.5%] top-11 hidden border-t border-dashed border-white/30 lg:block" />
          {processSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <motion.li variants={fadeUp} key={step.number} className="relative text-white">
                <motion.div
                  animate={
                    index === 0
                      ? {
                          boxShadow: [
                            '0 0 0 0 rgba(255,255,255,.18)',
                            '0 0 0 15px rgba(255,255,255,0)',
                          ],
                        }
                      : undefined
                  }
                  transition={{ duration: 2.4, repeat: Infinity }}
                  className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
                >
                  <Icon className="h-8 w-8" />
                  <span className="absolute -right-1 -top-1 rounded-full bg-accent px-2.5 py-1 text-[10px] font-extrabold text-primary-dark">
                    {step.number}
                  </span>
                </motion.div>
                <h3 className="mt-7 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-6 text-white/75">{step.description}</p>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
}
