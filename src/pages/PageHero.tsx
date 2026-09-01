import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { fadeUp, inViewProps, staggerContainer } from '../lib/animations';

interface PageHeroProps { eyebrow: string; title: string; description: string }

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return <header className="bg-hero-mesh pb-20 pt-36 sm:pb-24 sm:pt-44"><motion.div {...inViewProps} variants={staggerContainer} className="page-shell text-center"><motion.div variants={fadeUp}><Badge icon={<Sparkles className="h-3.5 w-3.5" />}>{eyebrow}</Badge></motion.div><motion.h1 variants={fadeUp} className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl lg:text-6xl">{title}</motion.h1><motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</motion.p></motion.div></header>;
}
