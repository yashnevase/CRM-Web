import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import { siteContent } from '../../data/site-content';
import { fadeUp, inViewProps, staggerFast } from '../../lib/animations';
import { Avatar } from '../ui/Avatar';
import { GlassCard } from '../ui/GlassCard';
import { SectionHeading } from '../ui/SectionHeading';

export function TestimonialsSection() {
  return <section className="section-space relative overflow-hidden bg-hero-mesh" aria-labelledby="testimonials-title"><div className="absolute -left-28 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" /><div className="page-shell relative"><motion.div {...inViewProps} variants={fadeUp}><SectionHeading align="center" eyebrow={siteContent.testimonials.eyebrow} title={siteContent.testimonials.title} description={siteContent.testimonials.description} /></motion.div><motion.div {...inViewProps} variants={staggerFast} className="mt-12 grid gap-5 lg:grid-cols-3">{testimonials.map((item) => <motion.div variants={fadeUp} whileHover={{ y: -4 }} key={item.name}><GlassCard className="h-full p-7"><div className="flex items-center justify-between"><Quote className="h-8 w-8 text-primary/30" /><div className="flex text-accent-strong">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}</div></div><blockquote className="mt-8 text-base font-medium leading-7">“{item.quote}”</blockquote><div className="mt-8 flex items-center gap-3"><Avatar src={item.image} alt={`${item.name}, patient reviewer`} /><div><p className="text-sm font-bold">{item.name}</p><p className="mt-1 text-xs text-muted">{item.detail}</p></div></div></GlassCard></motion.div>)}</motion.div></div></section>;
}
