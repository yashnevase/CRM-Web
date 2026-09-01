export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: 12, suffix: '+', label: 'Years of thoughtful care' },
  { value: 8, suffix: 'K+', label: 'Patients supported' },
  { value: 98, suffix: '%', label: 'Patient satisfaction' },
  { value: 24, suffix: '/7', label: 'Digital care access' },
];
