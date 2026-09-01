import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { departments } from '../../data/services';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { IconCircle } from '../ui/IconCircle';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceIcon } from '../ui/ServiceIcon';

export function DepartmentsSection() {
  return <section className="section-space bg-surface" aria-labelledby="departments-title"><div className="page-shell"><motion.div {...inViewProps} variants={fadeUp}><SectionHeading align="center" eyebrow={siteContent.departments.eyebrow} title={siteContent.departments.title} description={siteContent.departments.description} /></motion.div><motion.div {...inViewProps} variants={staggerFast} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{departments.map((item) => <motion.a href="#department" variants={fadeUp} whileHover={{ y: -4 }} key={item.title} className="group focus-ring rounded-3xl border border-line/70 bg-canvas p-6 shadow-card transition-shadow hover:shadow-glass"><div className="flex items-start justify-between"><IconCircle><ServiceIcon name={item.icon} /></IconCircle><ArrowUpRight className="h-4 w-4 text-muted transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" /></div><h3 className="mt-8 text-lg font-bold">{item.title}</h3></motion.a>)}</motion.div></div></section>;
}
