import { Link } from 'react-router-dom';
import { footerNavigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { BrandLogo } from '../ui/BrandLogo';

const destinations: Record<string, string> = {
  'About us': '/about',
  'Our services': '/services',
  Technology: '/network-technology#technology',
  'Healthcare network': '/network-technology',
  'Health check-ups': '/services#clipboard',
  Diagnostics: '/services#flask',
  'Home healthcare': '/home-healthcare',
  'Corporate healthcare': '/corporate-healthcare',
  'Occupational health': '/corporate-healthcare#activity',
  'Medical manpower': '/corporate-healthcare#building',
  'Contact us': '/contact',
};
const pendingContent = new Set([
  'Careers',
  'FAQs',
  'Privacy policy',
  'Terms and conditions',
  'Cancellation and refund policy',
]);

export function Footer() {
  return (
    <footer className="bg-primary-dark pt-14 text-white">
      <div className="page-shell">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] xl:grid-cols-[1.45fr_1fr_1fr_1fr_1fr]">
          <div>
            <BrandLogo inverse />
            <p className="mt-6 text-xs font-extrabold uppercase text-accent-soft">
              Technology-Enabled Healthcare | Trusted Medical Services | Care Delivered Everywhere
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/85">
              <a className="block hover:text-accent" href="tel:+918530201888">
                +91 85302 01888
              </a>
              <a
                className="block break-all hover:text-accent"
                href="mailto:medical.reports@lifemedconnect.com"
              >
                medical.reports@lifemedconnect.com
              </a>
            </div>
          </div>
          <FooterColumn
            title={siteContent.footer.headings.company}
            links={footerNavigation.company}
            to="/about"
          />
          <FooterColumn
            title={siteContent.footer.headings.services}
            links={footerNavigation.services}
            to="/services"
          />
          <FooterColumn
            title={siteContent.footer.headings.partners}
            links={footerNavigation.partners}
            to="/contact"
          />
          <FooterColumn
            title={siteContent.footer.headings.contact}
            links={footerNavigation.support}
            to="/contact"
          />
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {siteContent.brand.legalName}. All Rights Reserved.</p>
          <div className="flex gap-5">
            {footerNavigation.legal.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, to }: { title: string; links: string[]; to: string }) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/82">
        {links.map((item) => (
          <li key={item}>
            {pendingContent.has(item) ? (
              <span className="inline-flex min-h-6 items-center text-white/80">{item}</span>
            ) : (
              <Link
                to={destinations[item] ?? `${to}?source=${encodeURIComponent(item)}`}
                className="inline-flex min-h-6 items-center transition-colors hover:text-white"
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
