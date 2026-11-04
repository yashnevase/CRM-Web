import { CTASection } from '../components/sections/CTASection';
import { ServiceDetailsSection } from '../components/sections/ServiceDetailsSection';
import { AudienceSection } from '../components/sections/AudienceSection';
import { services } from '../data/services';
import { PageHero } from './PageHero';

export function Healthcare({ corporate = false }: { corporate?: boolean }) {
  const service = services.find((item) => item.icon === (corporate ? 'building' : 'home'))!;
  return (
    <main>
      <PageHero eyebrow={service.title} title={service.tagline} description={service.description} />
      <ServiceDetailsSection icons={corporate ? ['building', 'activity'] : ['home']} />
      <AudienceSection audience={corporate ? 'corporate' : 'individuals'} />
      <CTASection />
    </main>
  );
}
