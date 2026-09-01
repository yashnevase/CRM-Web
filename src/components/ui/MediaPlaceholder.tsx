import { FlaskConical, Stethoscope, UserRound } from 'lucide-react';
import { cn } from '../../lib/cn';

interface MediaPlaceholderProps {
  label: string;
  kind?: 'care' | 'person' | 'lab';
  className?: string;
}

export function MediaPlaceholder({ label, kind = 'care', className }: MediaPlaceholderProps) {
  const icons = { care: Stethoscope, person: UserRound, lab: FlaskConical };
  const Icon = icons[kind];
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        'relative flex overflow-hidden bg-gradient-to-br from-primary-soft via-surface to-accent-soft',
        className,
      )}
    >
      <span className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[36px] border-white/50" />
      <span className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-primary/10 blur-2xl" />
      <span className="relative m-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-white/60 bg-white/55 text-primary shadow-glass backdrop-blur-xl">
        <Icon className="h-10 w-10" strokeWidth={1.5} />
      </span>
    </div>
  );
}
