import { ArrowRight, Mail } from 'lucide-react';
import { siteContent } from '../../data/site-content';

export function NewsletterFooter() {
  return (
    <div className="glass-dark grid gap-7 rounded-3xl p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p className="text-xs font-bold text-accent">{siteContent.newsletter.eyebrow}</p>
        <h2 className="mt-3 max-w-xl text-2xl font-bold text-white sm:text-3xl">
          {siteContent.newsletter.title}
        </h2>
      </div>
      <form
        className="flex max-w-lg rounded-full border border-white/15 bg-white/10 p-1.5"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="sr-only" htmlFor="newsletter-email">
          {siteContent.newsletter.placeholder}
        </label>
        <Mail className="ml-3 h-5 w-5 self-center text-white/50" />
        <input
          id="newsletter-email"
          type="email"
          placeholder={siteContent.newsletter.placeholder}
          className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/45"
        />
        <button
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-primary-dark"
          aria-label={siteContent.newsletter.button}
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
