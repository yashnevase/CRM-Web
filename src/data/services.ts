import type { ServiceIconName } from '../components/ui/ServiceIcon';

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  tagline: string;
  highlights: string[];
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
    tagline: 'Stay ahead of health risks',
    highlights: [
      'Basic health assessments',
      'Comprehensive health check-ups',
      'Executive health check-ups',
      'Pre-employment medical examinations',
      'Periodic health assessments',
      'Customized corporate health packages',
    ],
    icon: 'clipboard',
    variant: 'primary',
    size: 'wide',
  },
  {
    index: '02',
    title: 'Diagnostic services',
    description:
      'Convenient access to pathology, radiology, imaging, ECG and specialized tests through a coordinated partner network.',
    tagline: 'Diagnostics made convenient',
    highlights: [
      'Blood investigations',
      'Urine investigations',
      'Biochemistry and pathology',
      'Radiology and ECG',
      'Imaging',
      'Specialized diagnostic tests',
      'Health screening packages',
      'Home sample collection',
      'Workplace sample collection',
    ],
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
    tagline: 'Healthcare that comes to you',
    highlights: [
      'Doctor visits',
      'Nursing services',
      'Physiotherapy',
      'Trained attendants',
      'Elder care',
      'Mother and baby care',
      'Critical care support',
      'Medical equipment',
    ],
    icon: 'home',
    variant: 'light',
    size: 'standard',
  },
  {
    index: '04',
    title: 'Corporate healthcare',
    description:
      'Preventive health, workforce wellbeing, medical examinations and on-site programs designed for modern organizations.',
    tagline: 'Healthcare solutions for modern workplaces',
    highlights: [
      'Annual health check-ups',
      'Pre-employment medical examinations',
      'Periodic medical examinations',
      'Occupational health services',
      'On-site health camps',
      'Employee wellness programs',
      'Preventive health screening',
      'Diagnostic services',
      'Doctor consultations',
      'Vaccination programs',
      'Health awareness programs',
      'Medical staffing and deployment',
      'Occupational health-centre management',
    ],
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
    tagline: 'Building healthier workplaces',
    highlights: [
      'Pre-employment medical examinations',
      'Periodic medical examinations',
      'Fitness-to-work assessments',
      'Occupational health screening',
      'On-site medical support',
      'Workplace health camps',
      'Medical staffing',
      'Occupational health-centre management',
      'Employee health records',
      'Health reporting and MIS',
    ],
    icon: 'activity',
    variant: 'accent',
    size: 'wide',
  },
  {
    index: '06',
    title: 'Healthcare network',
    description:
      'Centralized coordination across healthcare professionals, diagnostic providers, hospitals and clinics.',
    tagline: 'One network, multiple healthcare needs',
    highlights: [
      'Qualified healthcare professionals',
      'Diagnostic providers',
      'Hospitals and clinics',
      'Centralized coordination and visibility',
    ],
    icon: 'network',
    variant: 'light',
    size: 'standard',
  },
];
