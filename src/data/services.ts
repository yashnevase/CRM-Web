import type { ServiceIconName } from '../components/ui/ServiceIcon';

export interface ServiceItem {
  title: string;
  description: string;
  icon: ServiceIconName;
  variant: 'primary' | 'light' | 'image' | 'accent';
  image?: string;
  size: 'wide' | 'standard';
}

export const services: ServiceItem[] = [
  {
    title: 'Preventive health check-ups',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: 'clipboard',
    variant: 'primary',
    size: 'wide',
  },
  {
    title: 'Diagnostic services',
    description: 'Praesent commodo cursus magna vel scelerisque nisl.',
    icon: 'flask',
    variant: 'image',
    image: 'https://picsum.photos/seed/lumena-lab/900/700',
    size: 'standard',
  },
  {
    title: 'Home healthcare',
    description: 'Integer posuere erat a ante venenatis dapibus posuere.',
    icon: 'home',
    variant: 'light',
    size: 'standard',
  },
  {
    title: 'Corporate healthcare',
    description: 'Donec ullamcorper nulla non metus auctor fringilla.',
    icon: 'building',
    variant: 'image',
    image: 'https://picsum.photos/seed/lumena-movement/1000/700',
    size: 'wide',
  },
  {
    title: 'Occupational health',
    description: 'Aenean lacinia bibendum nulla sed consectetur.',
    icon: 'activity',
    variant: 'accent',
    size: 'wide',
  },
  {
    title: 'Healthcare network',
    description: 'Cras mattis consectetur purus sit amet fermentum.',
    icon: 'network',
    variant: 'light',
    size: 'standard',
  },
];

export const departments = [
  { title: 'Healthcare professionals', icon: 'users' as const },
  { title: 'Diagnostic partners', icon: 'flask' as const },
  { title: 'Hospitals and clinics', icon: 'stethoscope' as const },
  { title: 'Corporate partners', icon: 'building' as const },
];
