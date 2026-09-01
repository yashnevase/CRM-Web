import { Sparkles } from 'lucide-react';
import { Badge } from './Badge';
import { cn } from '../../lib/cn';

interface SectionHeadingProps { eyebrow: string; title: string; description: string; align?: 'left' | 'center'; dark?: boolean }

export function SectionHeading({ eyebrow, title, description, align = 'left', dark }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', dark && 'text-white')}>
      <Badge dark={dark} icon={<Sparkles className="h-3.5 w-3.5" />}>{eyebrow}</Badge>
      <h2 className="mt-5 text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl">{title}</h2>
      <p className={cn('mt-5 text-base leading-7', dark ? 'text-white/65' : 'text-muted')}>{description}</p>
    </div>
  );
}
