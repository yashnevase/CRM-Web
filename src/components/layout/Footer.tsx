import { Link } from 'react-router-dom';
import logo from '../../assets/lifemed-connect-logo.png';
import { footerNavigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';

export function Footer() {
  return (
    <footer className="bg-primary-dark pt-14 text-white">
      <div className="page-shell">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr] xl:grid-cols-[1.45fr_1fr_1fr_1fr_1fr]">
          <div>
            <img
              src={logo}
              alt="LifeMed Connect"
              width="540"
              height="161"
              className="h-14 w-auto brightness-110"
            />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/82">
              {siteContent.footer.blurb}
            </p>
            <p className="mt-6 text-xs font-extrabold uppercase text-accent-soft">
              {siteContent.brand.descriptor}
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
          <div>
            <h3 className="text-sm font-bold">{siteContent.footer.headings.contact}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/82">
              {siteContent.footer.contact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/72 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteContent.footer.copyright}</p>
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
