import {
  Activity,
  Brain,
  Building2,
  ChartNoAxesCombined,
  Handshake,
  MapPinned,
  Medal,
  ClipboardCheck,
  FlaskConical,
  HeartPulse,
  Home,
  Network,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  UserCheck,
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
  | 'clipboard'
  | 'map'
  | 'report'
  | 'chart'
  | 'shield'
  | 'badge'
  | 'handshake'
  | 'user-check';

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
    map: MapPinned,
    report: ClipboardCheck,
    chart: ChartNoAxesCombined,
    shield: ShieldCheck,
    badge: Medal,
    handshake: Handshake,
    'user-check': UserCheck,
  };
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
