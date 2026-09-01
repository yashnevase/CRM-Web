export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const team: TeamMember[] = [
  { name: 'Dr. Maya Laurent', role: 'Clinical Director', image: 'https://picsum.photos/seed/doctor-maya/640/720' },
  { name: 'Dr. Elias Rowan', role: 'Wellness Physician', image: 'https://picsum.photos/seed/doctor-elias/640/720' },
  { name: 'Dr. Nora Chen', role: 'Diagnostics Lead', image: 'https://picsum.photos/seed/doctor-nora/640/720' },
  { name: 'Dr. Amir Hayes', role: 'Movement Specialist', image: 'https://picsum.photos/seed/doctor-amir/640/720' },
];
