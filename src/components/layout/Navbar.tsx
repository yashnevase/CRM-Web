import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { cn } from '../../lib/cn';
import { MobileDrawer } from './MobileDrawer';
import { BrandLogo } from '../ui/BrandLogo';

export function Navbar() {
  const scrollY = useScrollPosition();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrollY > 40 ? 'rgba(255,255,255,.78)' : 'rgba(255,255,255,.34)',
          boxShadow: scrollY > 40 ? '0 16px 45px rgba(17,17,17,.08)' : '0 0 0 rgba(17,17,17,0)',
        }}
        transition={{ duration: 0.45 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/50 backdrop-blur-2xl"
      >
        <div className="page-shell flex h-[82px] items-center justify-between">
          <Link
            to="/"
            className="focus-ring flex items-center rounded-xl"
            aria-label={`${siteContent.brand.name} home`}
          >
            <BrandLogo />
          </Link>
          <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'focus-ring rounded-full px-2.5 py-2 text-xs font-semibold transition-colors hover:bg-white/70 hover:text-primary',
                    isActive && !item.href.includes('#') ? 'text-primary' : 'text-ink/75',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contact?source=partner-with-us"
              className="focus-ring hidden rounded-full border border-primary/20 bg-white/60 px-4 py-3 text-sm font-bold text-primary backdrop-blur-2xl transition duration-500 hover:bg-white 2xl:inline-flex"
            >
              {siteContent.common.partner}
            </Link>
            <Link
              to="/contact?source=book-a-service"
              className="focus-ring rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-ink shadow-glow transition duration-500 hover:scale-[1.025] hover:bg-accent-strong"
            >
              {siteContent.common.book}
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="focus-ring rounded-full border border-line/70 bg-white/70 p-3 xl:hidden"
              aria-label="Open navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>{open && <MobileDrawer onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
