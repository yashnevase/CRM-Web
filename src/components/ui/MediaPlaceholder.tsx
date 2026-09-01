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
        'quiet-grid relative flex overflow-hidden bg-gradient-to-br from-primary-soft via-surface to-accent-soft',
        className,
      )}
    >
      <span className="absolute inset-x-10 top-8 h-px bg-white/70" />
      <span className="absolute bottom-8 left-10 right-10 h-px bg-primary/10" />
      <span className="mac-glass relative m-auto flex h-24 w-24 items-center justify-center rounded-3xl text-primary">
        <Icon className="h-10 w-10" strokeWidth={1.5} />
      </span>
    </div>
  );
}
