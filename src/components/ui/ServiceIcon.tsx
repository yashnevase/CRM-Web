import { Activity, Brain, FlaskConical, HeartPulse, Sparkles, Stethoscope } from 'lucide-react';

export type ServiceIconName = 'heart' | 'activity' | 'brain' | 'sparkles' | 'stethoscope' | 'flask';

export function ServiceIcon({
  name,
  className = 'h-6 w-6',
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const icons = {
    heart: HeartPulse,
    activity: Activity,
    brain: Brain,
    sparkles: Sparkles,
    stethoscope: Stethoscope,
    flask: FlaskConical,
  };
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
