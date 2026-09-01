import type { ServiceIconName } from '../components/ui/ServiceIcon';

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  variant: 'primary' | 'light' | 'media' | 'accent';
  size: 'wide' | 'standard';
  mediaAlt?: string;
}

export const services: ServiceItem[] = [
  {
    index: '01',
    title: 'Preventive health check-ups',
    description:
      'Customized assessments for individuals, employees, executives and workforces—designed around age, role and health risks.',
    icon: 'clipboard',
    variant: 'primary',
    size: 'wide',
  },
  {
    index: '02',
    title: 'Diagnostic services',
    description:
      'Convenient access to pathology, radiology, imaging, ECG and specialized tests through a coordinated partner network.',
    icon: 'flask',
    variant: 'media',
    size: 'standard',
    mediaAlt: 'Diagnostic laboratory and pathology services',
  },
  {
    index: '03',
    title: 'Home healthcare',
    description:
      'Doctor visits, nursing, physiotherapy, attendants, elder care and clinical support delivered where people feel at home.',
    icon: 'home',
    variant: 'light',
    size: 'standard',
  },
  {
    index: '04',
    title: 'Corporate healthcare',
    description:
      'Preventive health, workforce wellbeing, medical examinations and on-site programs designed for modern organizations.',
    icon: 'building',
    variant: 'media',
    size: 'wide',
    mediaAlt: 'Corporate employee healthcare program',
  },
  {
    index: '05',
    title: 'Occupational health',
    description:
      'Industry-aware medical examinations, fitness assessments, staffing and health reporting for safer workplaces.',
    icon: 'activity',
    variant: 'accent',
    size: 'wide',
  },
  {
    index: '06',
    title: 'Healthcare network',
    description:
      'Centralized coordination across healthcare professionals, diagnostic providers, hospitals and clinics.',
    icon: 'network',
    variant: 'light',
    size: 'standard',
  },
];

export interface CareProgram {
  title: string;
  anchor: string;
  eyebrow: string;
  description: string;
  icon: ServiceIconName;
  mediaAlt: string;
  services: string[];
  tone: 'light' | 'primary' | 'accent';
}

export const carePrograms: CareProgram[] = [
  {
    title: 'Healthcare that comes to you',
    anchor: 'home-care',
    eyebrow: 'Home healthcare',
    description:
      'Convenient healthcare at home through trained professionals and trusted service partners.',
    icon: 'home',
    mediaAlt: 'Healthcare professional providing care at a patient’s home',
    services: [
      'Doctor visits',
      'Nursing services',
      'Physiotherapy',
      'Trained attendants',
      'Elder care',
      'Mother and baby care',
      'Critical care support',
      'Medical equipment',
    ],
    tone: 'light',
  },
  {
    title: 'Healthcare solutions for modern workplaces',
    anchor: 'corporate',
    eyebrow: 'Corporate healthcare',
    description:
      'Employee healthcare programs that support preventive health, workforce wellbeing and occupational requirements.',
    icon: 'building',
    mediaAlt: 'Healthcare team supporting a corporate wellness program',
    services: [
      'Annual health check-ups',
      'Pre-employment examinations',
      'On-site health camps',
      'Wellness programs',
      'Vaccination programs',
      'Doctor consultations',
      'Medical staffing',
      'Health centre management',
    ],
    tone: 'primary',
  },
  {
    title: 'Building healthier workplaces',
    anchor: 'occupational-health',
    eyebrow: 'Occupational health',
    description:
      'Programs can be adapted to industry, workforce size, job profiles, locations, health risks and regulatory requirements.',
    icon: 'activity',
    mediaAlt: 'Occupational health assessment in a workplace setting',
    services: [
      'Fitness-to-work assessments',
      'Periodic medical examinations',
      'On-site medical support',
      'Employee health records',
      'Health reporting and MIS',
      'Occupational risk screening',
    ],
    tone: 'accent',
  },
];
