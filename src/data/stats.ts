export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: 10, suffix: '+', label: 'Service categories' },
  { value: 5, suffix: 'K+', label: 'Care requests mapped' },
  { value: 98, suffix: '%', label: 'Process visibility goal' },
  { value: 24, suffix: '/7', label: 'Digital request access' },
];
