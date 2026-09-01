import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode; dark?: boolean }

export function GlassCard({ children, dark, className, ...props }: GlassCardProps) {
  return <div className={cn(dark ? 'glass-dark' : 'glass', 'rounded-3xl', className)} {...props}>{children}</div>;
}
