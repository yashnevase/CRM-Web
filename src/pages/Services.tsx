import { CTASection } from '../components/sections/CTASection';
import { DepartmentsSection } from '../components/sections/DepartmentsSection';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

export function Services() {
  return (
    <main>
      <PageHero {...siteContent.pages.services} />
      <ServicesGrid />
      <DepartmentsSection />
      <ProcessSteps />
      <CTASection />
    </main>
  );
}
