import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface IconCircleProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function IconCircle({ children, className, dark }: IconCircleProps) {
  return (
    <span
      className={cn(
        'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl',
        dark ? 'bg-white/10 text-white' : 'bg-primary-soft text-primary',
        className,
      )}
    >
      {children}
    </span>
  );
}
