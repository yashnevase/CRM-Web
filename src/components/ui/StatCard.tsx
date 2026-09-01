import { CountUp } from './CountUp';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
}

export function StatCard({ value, suffix, label }: StatCardProps) {
  return (
    <div className="border-line/70 px-5 py-5 text-center sm:border-r sm:last:border-0 lg:px-8">
      <div className="font-display text-3xl font-extrabold tracking-tight text-primary-dark sm:text-4xl">
        <CountUp target={value} suffix={suffix} />
      </div>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
