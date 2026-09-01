import { AboutSection } from '../components/sections/AboutSection';
import { CareProgramsSection } from '../components/sections/CareProgramsSection';
import { CTASection } from '../components/sections/CTASection';
import { DepartmentsSection } from '../components/sections/DepartmentsSection';
import { Hero } from '../components/sections/Hero';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { StatsStrip } from '../components/sections/StatsStrip';
import { TeamSection } from '../components/sections/TeamSection';
import { TechnologyNetworkSection } from '../components/sections/TechnologyNetworkSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <AboutSection />
      <ServicesGrid />
      <CareProgramsSection />
      <TechnologyNetworkSection />
      <ProcessSteps />
      <DepartmentsSection />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
