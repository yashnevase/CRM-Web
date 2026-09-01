import { Badge } from './Badge';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  dark,
}: SectionHeadingProps) {
  return (
    <div
      className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', dark && 'text-white')}
    >
      <Badge dark={dark} quiet>
        {eyebrow}
      </Badge>
      <h2 id={id} className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p
        className={cn(
          'mt-5 max-w-2xl text-base leading-7 sm:text-lg',
          align === 'center' && 'mx-auto',
          dark ? 'text-white/70' : 'text-muted',
        )}
      >
        {description}
      </p>
    </div>
  );
}
