import { siteContent } from '../../data/site-content';
import { cn } from '../../lib/cn';

interface BrandLogoProps {
  inverse?: boolean;
  compact?: boolean;
  className?: string;
}

export function BrandLogo({ inverse = false, compact = false, className }: BrandLogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-2xl',
        inverse && 'bg-white/80 p-2 backdrop-blur-sm',
        className,
      )}
    >
      <img
        src="/vitalsym-logo.png"
        alt={`${siteContent.brand.legalName} logo`}
        className={cn('h-auto w-[190px] object-contain mix-blend-multiply', compact && 'w-10')}
      />
    </span>
  );
}
