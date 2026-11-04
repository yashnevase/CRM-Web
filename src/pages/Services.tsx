import { CTASection } from '../components/sections/CTASection';
import { ServiceDetailsSection } from '../components/sections/ServiceDetailsSection';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';
import { ServicesGrid } from '../components/sections/ServicesGrid';

export function Services() {
  return (
    <main>
      <PageHero {...siteContent.pages.services} />
      <ServicesGrid />
      <ServiceDetailsSection icons={['clipboard', 'flask']} />
      <CTASection />
    </main>
  );
}
