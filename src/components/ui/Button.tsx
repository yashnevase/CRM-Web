import type { ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/cn';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  icon?: ReactNode;
}

export function Button({ children, variant = 'primary', icon, className, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-primary text-white shadow-glow hover:bg-primary-dark',
    secondary:
      'border border-primary/20 bg-white/60 text-ink hover:border-primary/40 hover:bg-white',
    light: 'bg-white text-primary-dark shadow-card hover:bg-canvas',
  };
  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition-colors duration-500',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
      {icon}
    </motion.button>
  );
}
