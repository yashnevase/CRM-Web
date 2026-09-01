import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/lifemed-connect-logo.png';
import { footerNavigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { NewsletterFooter } from './NewsletterFooter';

export function Footer() {
  return (
    <footer className="bg-primary-dark pt-14 text-white">
      <div className="page-shell">
        <NewsletterFooter />
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt="LifeMed Connect" className="h-14 w-auto brightness-110" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              {siteContent.footer.blurb}
            </p>
            <div className="mt-6 flex gap-2">
              {[Instagram, Linkedin, Facebook].map((Icon, index) => (
                <a
                  href="#social"
                  key={index}
                  className="focus-ring rounded-full bg-white/10 p-2.5 hover:bg-white/20"
                  aria-label="Social profile"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn
            title={siteContent.footer.headings.company}
            links={footerNavigation.company}
          />
          <FooterColumn
            title={siteContent.footer.headings.services}
            links={footerNavigation.services}
          />
          <div>
            <h3 className="text-sm font-bold">{siteContent.footer.headings.contact}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {siteContent.footer.contact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteContent.footer.copyright}</p>
          <div className="flex gap-5">
            {footerNavigation.legal.map((item) => (
              <a href="#legal" key={item} className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-white/60">
        {links.map((item) => (
          <li key={item}>
            <Link to="/" className="hover:text-white">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
