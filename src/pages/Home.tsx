import { AboutSection } from '../components/sections/AboutSection';
import { CTASection } from '../components/sections/CTASection';
import { Hero } from '../components/sections/Hero';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { TrustStrip } from '../components/sections/TrustStrip';
import { WhyChooseSection } from '../components/sections/WhyChooseSection';

export function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseSection />
      <CTASection />
    </main>
  );
}
