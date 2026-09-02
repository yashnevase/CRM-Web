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
        <div className="page-shell grid items-stretch gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          
          {/* Contact details */}
          <div className="relative overflow-hidden rounded-3xl bg-primary p-7 text-white shadow-[0_20px_50px_rgba(8,91,103,0.16)] sm:p-8">
            {/* Subtle decorative glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative z-10">
              <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                Contact details
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                {siteContent.footer.blurb}
              </p>

              <div className="mt-8 space-y-4">
                {[Mail, Phone, MapPin].map((Icon, index) => (
                  <div
                    key={siteContent.footer.contact[index]}
                    className="flex items-center gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                      <Icon className="h-4 w-4 text-white" />
                    </span>

                    <span className="text-sm leading-5 text-white/90">
                      {siteContent.footer.contact[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <form
            onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-line bg-white p-6 shadow-[0_18px_45px_rgba(8,91,103,0.10)] sm:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              Submit an enquiry
            </h2>

            <p className="mt-2 max-w-lg text-sm leading-6 text-muted">
              Share a few details and the right team can respond to your
              requirement.
            </p>

            <input
              type="hidden"
              name="source"
              value="website-contact"
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {fields.map((field, index) => (
                <label
                  key={field.name}
                  className={index === 4 ? 'sm:col-span-2' : ''}
                >
                  <span className="text-xs font-semibold text-ink">
                    {field.label}
                  </span>

                  <input
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required={field.required}
                    className="focus-ring mt-1.5 h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-primary"
                  />
                </label>
              ))}

              <label className="sm:col-span-2">
                <span className="text-xs font-semibold text-ink">
                  I am interested in
                </span>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="focus-ring mt-1.5 h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm outline-none transition-colors focus:border-primary"
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
                <span className="text-xs font-semibold text-ink">
                  How can we help?
                </span>

                <textarea
                  name="message"
                  rows={4}
                  className="focus-ring mt-1.5 w-full resize-none rounded-xl border border-line bg-white px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </label>
            </div>

            <button className="focus-ring mt-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-5 text-xs font-extrabold text-ink shadow-glow transition duration-300 hover:scale-[1.025]">
              Submit enquiry
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
