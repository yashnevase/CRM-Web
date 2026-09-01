import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
  className?: string;
  quiet?: boolean;
}

export function Badge({ children, icon, dark, quiet, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[11px] font-extrabold uppercase',
        dark
          ? 'border-white/15 bg-white/10 text-white/80'
          : 'border-white/75 bg-white/60 text-primary-dark shadow-card backdrop-blur-xl',
        quiet &&
          'border-primary/12 bg-transparent px-0 py-0 text-primary shadow-none backdrop-blur-0',
        quiet && dark && 'border-white/20 text-white/80',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
