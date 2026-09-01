import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { fadeUp, slideDrawer, staggerContainer } from '../../lib/animations';

interface MobileDrawerProps { onClose: () => void }

export function MobileDrawer({ onClose }: MobileDrawerProps) {
  return (
    <motion.aside initial="hidden" animate="visible" exit="exit" variants={slideDrawer} className="glass fixed inset-y-0 right-0 z-[60] flex w-full max-w-sm flex-col rounded-none border-l px-7 py-6" aria-label="Mobile navigation">
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-extrabold text-primary-dark">{siteContent.brand.name}</span>
        <button onClick={onClose} className="focus-ring rounded-full bg-white p-3 text-ink" aria-label="Close navigation"><X className="h-5 w-5" /></button>
      </div>
      <motion.nav variants={staggerContainer} className="mt-20 flex flex-col gap-2">
        {navigation.map((item) => <motion.div key={item.label} variants={fadeUp}><Link onClick={onClose} to={item.href} className="focus-ring flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl font-bold hover:bg-white/70">{item.label}<ArrowUpRight className="h-5 w-5 text-primary" /></Link></motion.div>)}
      </motion.nav>
      <div className="mt-auto rounded-3xl bg-primary p-6 text-white">
        <p className="text-sm text-white/70">{siteContent.cta.eyebrow}</p>
        <p className="mt-2 font-display text-xl font-bold">{siteContent.cta.title}</p>
      </div>
    </motion.aside>
  );
}
