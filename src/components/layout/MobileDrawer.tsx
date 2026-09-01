import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/lifemed-connect-logo.png';
import { navigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { fadeUp, slideDrawer, staggerContainer } from '../../lib/animations';

interface MobileDrawerProps {
  onClose: () => void;
}

export function MobileDrawer({ onClose }: MobileDrawerProps) {
  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[55] cursor-default bg-primary-dark/20 backdrop-blur-sm"
        aria-label="Close navigation"
      />
      <motion.aside
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={slideDrawer}
        className="glass fixed inset-y-0 right-0 z-[60] flex w-full max-w-md flex-col rounded-none border-l px-7 py-6"
        aria-label="Mobile navigation"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="LifeMed Connect" className="h-12 w-auto" />
          <button
            onClick={onClose}
            className="focus-ring rounded-full bg-white p-3 text-ink shadow-card"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <motion.nav variants={staggerContainer} className="mt-6 flex-1 overflow-y-auto pr-1">
          {navigation.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <Link
                onClick={onClose}
                to={item.href}
                className="focus-ring flex items-center justify-between rounded-2xl px-4 py-2.5 font-display text-lg font-bold hover:bg-white/70"
              >
                {item.label}
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <div className="mt-4 rounded-3xl bg-primary p-5 text-white shadow-glass">
          <p className="text-sm text-white/70">{siteContent.cta.eyebrow}</p>
          <p className="mt-2 font-display text-lg font-bold">{siteContent.cta.title}</p>
          <Link
            onClick={onClose}
            to="/contact"
            className="focus-ring mt-4 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-ink"
          >
            {siteContent.common.book}
          </Link>
        </div>
      </motion.aside>
    </>
  );
}
