import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { siteContent } from '../data/site-content';
import { PageHero } from './PageHero';

const fields = [
  { label: 'Full name', name: 'name', type: 'text', autoComplete: 'name', required: true },
  {
    label: 'Company name',
    name: 'company',
    type: 'text',
    autoComplete: 'organization',
    required: false,
  },
  { label: 'Email address', name: 'email', type: 'email', autoComplete: 'email', required: true },
  { label: 'Mobile number', name: 'mobile', type: 'tel', autoComplete: 'tel', required: true },
  {
    label: 'City',
    name: 'city',
    type: 'text',
    autoComplete: 'address-level2',
    required: false,
  },
] as const;

const interestOptions = [
  'Corporate healthcare',
  'Home healthcare',
  'Diagnostic services',
  'Health check-ups',
  'Healthcare network',
  'Partnership',
  'Other',
];

export function Contact() {
  return (
    <main>
      <PageHero {...siteContent.pages.contact} />
      <section className="section-space bg-surface">
        <div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="quiet-grid rounded-3xl bg-primary p-8 text-white shadow-glass">
            <h2 className="text-2xl font-bold">Contact details</h2>
            <p className="mt-4 text-sm leading-6 text-white/82">{siteContent.footer.blurb}</p>
            <div className="mt-10 space-y-5">
              {[Mail, Phone, MapPin].map((Icon, index) => (
                <div key={siteContent.footer.contact[index]} className="flex items-center gap-4">
                  <span className="rounded-2xl bg-white/10 p-3">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm">{siteContent.footer.contact[index]}</span>
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="mac-glass rounded-3xl p-6 sm:p-8"
          >
            <h2 className="text-2xl font-bold">Submit an enquiry</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Share a few details and the right team can respond to your requirement.
            </p>
            <input type="hidden" name="source" value="website-contact" />
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {fields.map((field, index) => (
                <label key={field.name} className={index === 4 ? 'sm:col-span-2' : ''}>
                  <span className="text-sm font-semibold">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    className="focus-ring mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3.5"
                  />
                </label>
              ))}
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold">I am interested in</span>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="focus-ring mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3.5"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {interestOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="sm:col-span-2">
                <span className="text-sm font-semibold">How can we help?</span>
                <textarea
                  name="message"
                  rows={5}
                  className="focus-ring mt-2 w-full resize-none rounded-2xl border border-line bg-white px-4 py-3.5"
                />
              </label>
            </div>
            <button className="focus-ring mt-6 inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 text-sm font-extrabold text-ink shadow-glow transition duration-500 hover:scale-[1.025]">
              Submit enquiry
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
