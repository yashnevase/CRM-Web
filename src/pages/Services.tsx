import { CTASection } from '../components/sections/CTASection';
import { ServiceDetailsSection } from '../components/sections/ServiceDetailsSection';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

export function Services() {
  return (
    <main>
      <PageHero {...siteContent.pages.services} />
      <ServiceDetailsSection />
      <CTASection />
    </main>
  );
}
