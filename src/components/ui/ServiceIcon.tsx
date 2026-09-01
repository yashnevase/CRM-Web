import {
  Activity,
  Brain,
  Building2,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  Home,
  Network,
  Sparkles,
  Stethoscope,
  UsersRound,
} from 'lucide-react';

export type ServiceIconName =
  | 'heart'
  | 'activity'
  | 'brain'
  | 'sparkles'
  | 'stethoscope'
  | 'flask'
  | 'building'
  | 'home'
  | 'network'
  | 'users'
  | 'clipboard';

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
    building: Building2,
    home: Home,
    network: Network,
    users: UsersRound,
    clipboard: ClipboardCheck,
  };
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
