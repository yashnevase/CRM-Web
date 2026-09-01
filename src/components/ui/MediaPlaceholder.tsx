import { FlaskConical, Image, Stethoscope, UserRound } from 'lucide-react';
import { cn } from '../../lib/cn';

interface MediaPlaceholderProps {
  label: string;
  kind?: 'care' | 'person' | 'lab';
  src?: string;
  className?: string;
}

export function MediaPlaceholder({ label, kind = 'care', src, className }: MediaPlaceholderProps) {
  const icons = { care: Stethoscope, person: UserRound, lab: FlaskConical };
  const Icon = icons[kind];

  if (src) {
    return (
      <img
        src={src}
        alt={label}
        width="1200"
        height="900"
        className={cn('object-cover', className)}
        loading="lazy"
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={cn('image-wash quiet-grid relative flex overflow-hidden', className)}
    >
      <span className="absolute inset-x-8 top-8 h-24 rounded-[999px] bg-white/[.38] blur-2xl" />
      <span className="absolute -right-6 bottom-8 h-36 w-36 rounded-[2rem] border border-white/70 bg-white/[.28]" />
      <span className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/[.58] px-3 py-1.5 text-[10px] font-extrabold uppercase text-primary-dark backdrop-blur-xl">
        Image slot
      </span>
      <span className="mac-glass relative m-auto flex h-24 w-24 items-center justify-center rounded-full text-primary sm:h-28 sm:w-28">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={1.25} />
      </span>
      <span className="absolute bottom-4 left-4 right-4 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/70 bg-white/[.66] px-3 py-2 text-center text-[11px] font-bold text-primary-dark backdrop-blur-xl">
        <Image className="h-3.5 w-3.5" />
        {label}
      </span>
    </div>
  );
}
