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
    title: 'Technology enabled',
    description: 'Digital processes that improve booking, allocation, tracking and service visibility.',
    icon: 'sparkles',
  },
  {
    title: 'Pan-India network',
    description:
      'Healthcare delivery supported through a growing network of professionals and service partners.',
    icon: 'network',
  },
  {
    title: 'Quality and process driven',
    description: 'Standardized processes designed for consistent healthcare experiences.',
    icon: 'clipboard',
  },
];

export const corporateReasons: FeatureItem[] = [
  {
    title: 'Single healthcare partner',
    description: 'Multiple healthcare requirements managed through one ecosystem.',
    icon: 'handshake',
  },
  {
    title: 'Scalable network',
    description: 'Ability to support multiple locations and workforce sizes.',
    icon: 'network',
  },
  {
    title: 'Technology enabled',
    description: 'Centralized visibility and service tracking.',
    icon: 'sparkles',
  },
  {
    title: 'Customized programs',
    description: 'Solutions designed around industry and workforce requirements.',
    icon: 'clipboard',
  },
  {
    title: 'Operational support',
    description: 'Dedicated coordination for service execution.',
    icon: 'user-check',
  },
  {
    title: 'Data and reporting',
    description: 'Structured MIS for management visibility.',
    icon: 'report',
  },
];

export const individualActions: FeatureItem[] = [
  {
    title: 'Book a health check-up',
    description: 'Your Healthcare. Your Convenience.',
    icon: 'clipboard',
  },
  {
    title: 'Book a home healthcare service',
    description: 'Your Healthcare. Your Convenience.',
    icon: 'home',
  },
  {
    title: 'Book a diagnostic test',
    description: 'Your Healthcare. Your Convenience.',
    icon: 'flask',
  },
  {
    title: 'Talk to us',
    description: 'Your Healthcare. Your Convenience.',
    icon: 'heart',
  },
];

export const technologyCapabilities: FeatureItem[] = [
  {
    title: 'Digital request management',
    description: 'Healthcare requests can be captured and managed digitally.',
    icon: 'clipboard',
  },
  {
    title: 'Provider mapping',
    description:
      'Healthcare professionals and service providers can be mapped based on location, specialization and service capability.',
    icon: 'map',
  },
  {
    title: 'Smart allocation',
    description: 'Requests can be assigned based on predefined operational parameters.',
    icon: 'network',
  },
  {
    title: 'Real-time tracking',
    description: 'Service status can be tracked across the lifecycle of the request.',
    icon: 'activity',
  },
  {
    title: 'Digital MIS and reporting',
    description: 'Clients can access structured reports and service information.',
    icon: 'report',
  },
  {
    title: 'Network management',
    description: 'Manage professionals and service providers through a centralized system.',
    icon: 'users',
  },
  {
    title: 'Data and analytics',
    description:
      'Operational data can help organizations identify trends, improve efficiency and make better healthcare decisions.',
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
    description: 'Diagnostic providers supporting pathology, imaging and specialized tests.',
    icon: 'flask',
  },
  {
    title: 'Hospitals and clinics',
    description: 'Clinical partners supporting care across locations.',
    icon: 'stethoscope',
  },
  {
    title: 'Corporate partners',
    description: 'Organizations building healthcare programs around workforce requirements.',
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
    description: 'We believe healthcare services must be delivered with transparency and responsibility.',
    icon: 'shield',
  },
  {
    title: 'Quality',
    description: 'We continuously work towards standardized and reliable service delivery.',
    icon: 'badge',
  },
  {
    title: 'Technology',
    description: 'We use technology to simplify healthcare operations and improve visibility.',
    icon: 'sparkles',
  },
  {
    title: 'Empathy',
    description: 'Compassion remains at the centre of every healthcare experience.',
    icon: 'handshake',
  },
  {
    title: 'Accountability',
    description: 'We take ownership of every service entrusted to us.',
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
    description:
      'Our network-driven model allows healthcare services to be coordinated across multiple locations.',
    icon: 'map',
  },
  {
    title: 'Process oriented',
    description: 'Defined workflows create consistency from request to completion.',
    icon: 'clipboard',
  },
  {
    title: 'Client focused',
    description: 'Solutions are designed around the specific requirements of customers and organizations.',
    icon: 'user-check',
  },
  {
    title: 'Healthcare expertise',
    description: 'Our approach combines healthcare knowledge with technology and operational capabilities.',
    icon: 'stethoscope',
  },
];
