export interface ServiceItem {
  title: string;
  description: string;
  icon: 'heart' | 'activity' | 'brain' | 'sparkles' | 'stethoscope' | 'flask';
  variant: 'primary' | 'light' | 'image' | 'accent';
  image?: string;
  size: 'wide' | 'standard';
}

export const services: ServiceItem[] = [
  { title: 'Preventive care', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', icon: 'heart', variant: 'primary', size: 'wide' },
  { title: 'Diagnostics', description: 'Praesent commodo cursus magna vel scelerisque nisl.', icon: 'flask', variant: 'image', image: 'https://picsum.photos/seed/lumena-lab/900/700', size: 'standard' },
  { title: 'Whole-body wellness', description: 'Integer posuere erat a ante venenatis dapibus posuere.', icon: 'sparkles', variant: 'light', size: 'standard' },
  { title: 'Movement therapy', description: 'Donec ullamcorper nulla non metus auctor fringilla.', icon: 'activity', variant: 'image', image: 'https://picsum.photos/seed/lumena-movement/1000/700', size: 'wide' },
  { title: 'Mental wellbeing', description: 'Aenean lacinia bibendum nulla sed consectetur.', icon: 'brain', variant: 'accent', size: 'wide' },
  { title: 'Specialist consults', description: 'Cras mattis consectetur purus sit amet fermentum.', icon: 'stethoscope', variant: 'light', size: 'standard' },
];

export const departments = [
  { title: 'General medicine', icon: 'stethoscope' as const },
  { title: 'Cardiology', icon: 'heart' as const },
  { title: 'Neurology', icon: 'brain' as const },
  { title: 'Rehabilitation', icon: 'activity' as const },
];
