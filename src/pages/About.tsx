import { AboutSection } from '../components/sections/AboutSection';
import { CTASection } from '../components/sections/CTASection';
import { ValuesSection } from '../components/sections/ValuesSection';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

export function About() {
  return (
    <main>
      <PageHero {...siteContent.pages.about} />
      <AboutSection />
      <ValuesSection />
      <CTASection />
    </main>
  );
}
