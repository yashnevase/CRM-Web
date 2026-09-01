import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerContainer } from '../../lib/animations';
import { Badge } from '../ui/Badge';

export function CTASection() {
  return <section className="bg-surface py-10 sm:py-14"><div className="page-shell"><motion.div {...inViewProps} variants={staggerContainer} className="relative overflow-hidden rounded-4xl bg-primary px-6 py-14 text-center text-white shadow-glass sm:px-10 lg:py-20"><div className="absolute -left-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" /><div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl" /><motion.div variants={fadeUp} className="relative"><Badge dark icon={<Sparkles className="h-3.5 w-3.5" />}>{siteContent.cta.eyebrow}</Badge></motion.div><motion.h2 variants={fadeUp} className="relative mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">{siteContent.cta.title}</motion.h2><motion.p variants={fadeUp} className="relative mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">{siteContent.cta.description}</motion.p><motion.div variants={fadeUp} className="relative mt-8"><Link to="/contact" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-primary-dark shadow-card transition duration-500 hover:scale-[1.025]">{siteContent.common.book}<ArrowUpRight className="h-4 w-4" /></Link></motion.div></motion.div></div></section>;
}
