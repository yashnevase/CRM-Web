import { CTASection } from '../components/sections/CTASection';
import { CareProgramsSection } from '../components/sections/CareProgramsSection';
import { HealthcareNetworkSection } from '../components/sections/HealthcareNetworkSection';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

export function Services() {
  return (
    <main>
      <PageHero {...siteContent.pages.services} />
      <ServicesGrid />
      <CareProgramsSection />
      <HealthcareNetworkSection />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
