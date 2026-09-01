import type { ServiceIconName } from '../components/ui/ServiceIcon';

export interface FeatureItem {
  title: string;
  description: string;
  icon: ServiceIconName;
}

export const supportPoints: FeatureItem[] = [
  {
    title: 'Trusted healthcare professionals',
    description: 'Access to a network of qualified and trained healthcare professionals.',
    icon: 'users',
  },
  {
    title: 'Digitally coordinated',
    description: 'Digital booking, allocation, tracking and service visibility.',
    icon: 'sparkles',
  },
  {
    title: 'Pan-India network',
    description: 'A growing network of professionals and service partners across locations.',
    icon: 'network',
  },
  {
    title: 'Quality and process driven',
    description: 'Standardized processes designed for consistent healthcare experiences.',
    icon: 'clipboard',
  },
];

export const technologyCapabilities: FeatureItem[] = [
  {
    title: 'Digital request management',
    description: 'Capture and organize healthcare requests digitally.',
    icon: 'clipboard',
  },
  {
    title: 'Provider mapping',
    description: 'Map providers by location, specialization and capability.',
    icon: 'map',
  },
  {
    title: 'Smart allocation',
    description: 'Assign requests using clear operational parameters.',
    icon: 'network',
  },
  {
    title: 'Real-time tracking',
    description: 'Follow service status throughout the request lifecycle.',
    icon: 'activity',
  },
  {
    title: 'MIS and reporting',
    description: 'Give clients structured service information and reports.',
    icon: 'report',
  },
  {
    title: 'Data and analytics',
    description: 'Turn operational data into better healthcare decisions.',
    icon: 'chart',
  },
];

export const networkPartners: FeatureItem[] = [
  {
    title: 'Healthcare professionals',
    description: 'Qualified doctors, nurses, therapists and care professionals.',
    icon: 'users',
  },
  {
    title: 'Diagnostic partners',
    description: 'Pathology, imaging and specialized testing providers.',
    icon: 'flask',
  },
  {
    title: 'Hospitals and clinics',
    description: 'Clinical partners supporting care across locations.',
    icon: 'stethoscope',
  },
  {
    title: 'Corporate partners',
    description: 'Organizations building healthier workforce programs.',
    icon: 'building',
  },
];

export const coreValues: FeatureItem[] = [
  {
    title: 'Patient first',
    description: 'Every process begins with the needs of the person receiving care.',
    icon: 'heart',
  },
  {
    title: 'Integrity',
    description: 'Healthcare services delivered with transparency and responsibility.',
    icon: 'shield',
  },
  {
    title: 'Quality',
    description: 'Standardized processes that support reliable service delivery.',
    icon: 'badge',
  },
  {
    title: 'Technology',
    description: 'Practical tools that simplify operations and improve visibility.',
    icon: 'sparkles',
  },
  {
    title: 'Empathy',
    description: 'Compassion remains at the centre of every healthcare experience.',
    icon: 'handshake',
  },
  {
    title: 'Accountability',
    description: 'Ownership of every service and responsibility entrusted to us.',
    icon: 'user-check',
  },
];

export const whyChooseUs: FeatureItem[] = [
  {
    title: 'Technology driven',
    description: 'Digital tools manage complex healthcare operations efficiently.',
    icon: 'sparkles',
  },
  {
    title: 'Network powered',
    description: 'A growing provider network supports scalable service delivery.',
    icon: 'network',
  },
  {
    title: 'Pan-India capability',
    description: 'A network-led model helps coordinate care across locations.',
    icon: 'map',
  },
  {
    title: 'Process oriented',
    description: 'Defined workflows create consistency from request to completion.',
    icon: 'clipboard',
  },
  {
    title: 'Client focused',
    description: 'Programs are shaped around personal and organizational needs.',
    icon: 'user-check',
  },
  {
    title: 'Healthcare expertise',
    description: 'Healthcare knowledge is supported by technology and operations.',
    icon: 'stethoscope',
  },
];
