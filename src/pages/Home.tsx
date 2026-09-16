import { AboutSection } from '../components/sections/AboutSection';
import { AudienceSection } from '../components/sections/AudienceSection';
import { CareProgramsSection } from '../components/sections/CareProgramsSection';
import { CTASection } from '../components/sections/CTASection';
import { HealthcareNetworkSection } from '../components/sections/HealthcareNetworkSection';
import { Hero } from '../components/sections/Hero';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { TechnologyNetworkSection } from '../components/sections/TechnologyNetworkSection';
import { TrustStrip } from '../components/sections/TrustStrip';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';

export function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesGrid />
      <CareProgramsSection />
      <TechnologyNetworkSection />
      <ProcessSteps />
      <HealthcareNetworkSection />
      <AudienceSection />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
