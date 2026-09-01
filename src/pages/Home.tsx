import { AboutSection } from '../components/sections/AboutSection';
import { CTASection } from '../components/sections/CTASection';
import { DepartmentsSection } from '../components/sections/DepartmentsSection';
import { Hero } from '../components/sections/Hero';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { StatsStrip } from '../components/sections/StatsStrip';
import { TeamSection } from '../components/sections/TeamSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export function Home() {
  return <main><Hero /><StatsStrip /><AboutSection /><ServicesGrid /><ProcessSteps /><DepartmentsSection /><TeamSection /><TestimonialsSection /><CTASection /></main>;
}
