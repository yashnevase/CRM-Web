import { AboutSection } from '../components/sections/AboutSection';
import { CTASection } from '../components/sections/CTASection';
import { TeamSection } from '../components/sections/TeamSection';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

export function About() { return <main><PageHero {...siteContent.pages.about} /><AboutSection /><TeamSection /><CTASection /></main>; }
