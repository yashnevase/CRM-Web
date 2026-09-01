import type { ServiceIconName } from '../components/ui/ServiceIcon';

export interface CareProgram {
  title: string;
  anchor: string;
  audience: string;
  description: string;
  icon: ServiceIconName;
  points: string[];
}

export const carePrograms: CareProgram[] = [
  {
    title: 'For individuals',
    anchor: 'home-care',
    audience: 'Personal healthcare',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere.',
    icon: 'heart',
    points: ['Health check-ups', 'Diagnostic tests', 'Home care support'],
  },
  {
    title: 'For corporates',
    anchor: 'corporate-care',
    audience: 'Workforce wellbeing',
    description:
      'Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Aenean lacinia bibendum nulla.',
    icon: 'building',
    points: ['Annual programs', 'Medical examinations', 'Wellness camps'],
  },
  {
    title: 'For partners',
    anchor: 'partner-network',
    audience: 'Network growth',
    description:
      'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis.',
    icon: 'network',
    points: ['Provider mapping', 'Service coordination', 'Partner onboarding'],
  },
];

export const technologyCapabilities = [
  'Digital request management',
  'Provider mapping',
  'Smart allocation',
  'Real-time tracking',
  'MIS and reporting',
  'Network operations',
];
