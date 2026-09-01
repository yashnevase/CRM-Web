import { UserRound } from 'lucide-react';
import { cn } from '../../lib/cn';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <span
      role="img"
      aria-label={alt}
      data-placeholder-source={src}
      className={cn(
        'flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-primary-soft to-accent-soft text-primary shadow-card',
        className,
      )}
    >
      <UserRound className="h-1/2 w-1/2" />
    </span>
  );
}
