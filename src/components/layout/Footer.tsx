import { Link } from 'react-router-dom';
import { footerNavigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { BrandLogo } from '../ui/BrandLogo';

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
            <Link to={to} className="transition-colors hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
