import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  MapPinned,
  MessageCircleHeart,
} from 'lucide-react';
import { processSteps } from '../../data/process-steps';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps } from '../../lib/animations';
import { SectionHeading } from '../ui/SectionHeading';

const icons = [MessageCircleHeart, MapPinned, Activity, FileText];
const previews = [
  ['New service request', 'Priority · Standard', 'bg-accent'],
  ['Provider match radar', '12 accredited partners nearby', 'bg-primary'],
  ['Care team active', 'Live coordination · 04:32', 'bg-primary-dark'],
  ['Journey complete', 'MIS report ready to export', 'bg-accent'],
] as const;

export function ProcessSteps() {
  const [active, setActive] = useState(0);
  const Icon = icons[active];
  const preview = previews[active];
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
        <div className="mt-12 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <motion.ol
            {...inViewProps}
            variants={fadeUp}
            className="space-y-2 rounded-3xl border border-white/15 bg-black/10 p-3 backdrop-blur-xl"
            aria-label="Service delivery steps"
          >
            {processSteps.map((step, index) => {
              const StepIcon = icons[index];
              return (
                <li key={step.number}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={active === index}
                    onClick={() => setActive(index)}
                    className={`focus-ring flex w-full items-center gap-4 rounded-2xl p-4 text-left transition ${active === index ? 'bg-white text-primary-dark shadow-glass' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${active === index ? 'bg-primary-soft text-primary' : 'bg-white/10 text-white'}`}
                    >
                      <StepIcon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-black uppercase tracking-[.18em] opacity-60">
                        {step.number}
                      </span>
                      <span className="mt-1 block text-sm font-bold">{step.title}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </motion.ol>
          <motion.div
            {...inViewProps}
            variants={fadeUp}
            className="mac-glass min-h-[300px] rounded-3xl p-5 sm:p-8"
          >
            <div className="flex items-center justify-between border-b border-primary/10 pb-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[.16em] text-primary">
                  Live preview
                </p>
                <p className="mt-1 text-sm font-bold text-primary-dark">
                  LifeMed operations workspace
                </p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="mt-8 rounded-2xl border border-primary/10 bg-white/70 p-5"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${preview[2]} text-white`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-bold text-primary-dark">{preview[0]}</p>
                    <p className="mt-1 text-sm text-muted">{preview[1]}</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-5 w-5 text-emerald-500" />
                </div>
                {active === 1 && (
                  <div className="relative mx-auto mt-7 flex h-28 w-28 items-center justify-center rounded-full border border-primary/20 bg-primary-soft/30">
                    <span className="absolute h-20 w-20 rounded-full border border-primary/25" />
                    <span className="absolute h-12 w-12 rounded-full border border-primary/30" />
                    <span className="h-3 w-3 rounded-full bg-accent shadow-glow" />
                  </div>
                )}
                <div className="mt-7 grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((item) => (
                    <span
                      key={item}
                      className={`h-2 rounded-full ${item <= active + 1 ? 'bg-primary' : 'bg-primary-soft'}`}
                    />
                  ))}
                </div>
                {active === 3 && (
                  <button
                    type="button"
                    className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-primary-dark px-4 py-2.5 text-xs font-bold text-white"
                  >
                    Export structured MIS report <ClipboardCheck className="h-4 w-4" />
                  </button>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
