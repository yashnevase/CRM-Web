import { HeartPulse } from 'lucide-react';
import { siteContent } from '../../data/site-content';
import { cn } from '../../lib/cn';

interface BrandLogoProps {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
}

export function BrandLogo({ inverse = false, compact = false, className }: BrandLogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <span
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-2xl shadow-card',
          inverse ? 'bg-white text-primary' : 'bg-primary text-white',
        )}
      >
        <HeartPulse className="h-5 w-5" strokeWidth={2.4} />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            'block font-display text-xl font-black tracking-tight',
            inverse ? 'text-white' : 'text-primary-dark',
          )}
        >
          {siteContent.brand.name}
        </span>
        {!compact && (
          <span
            className={cn(
              'mt-1 block text-[9px] font-bold uppercase tracking-[.15em]',
              inverse ? 'text-white/65' : 'text-muted',
            )}
          >
            {siteContent.brand.shortDescriptor}
          </span>
        )}
      </span>
    </span>
  );
}
