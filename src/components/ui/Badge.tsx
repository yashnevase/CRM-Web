import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
  className?: string;
}

export function Badge({ children, icon, dark, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-bold uppercase tracking-[0.16em]',
        dark
          ? 'border-white/15 bg-white/10 text-white/80'
          : 'border-primary/10 bg-primary-soft/70 text-primary-dark',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
