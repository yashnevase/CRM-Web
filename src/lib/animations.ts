import type { Variants } from 'framer-motion';

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: easePremium } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: easePremium } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

export const slideDrawer: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { duration: 0.55, ease: easePremium } },
  exit: { x: '100%', transition: { duration: 0.4, ease: easePremium } },
};

export const inViewProps = { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.2 } } as const;
