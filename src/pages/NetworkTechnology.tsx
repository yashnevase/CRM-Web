import { CTASection } from '../components/sections/CTASection';
import { HealthcareNetworkSection } from '../components/sections/HealthcareNetworkSection';
import { TechnologyNetworkSection } from '../components/sections/TechnologyNetworkSection';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

export function NetworkTechnology() {
  return (
    <main>
      <PageHero {...siteContent.network} />
      <HealthcareNetworkSection />
      <TechnologyNetworkSection />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
