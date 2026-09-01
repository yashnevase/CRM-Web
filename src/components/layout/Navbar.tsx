import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeartPulse, Menu, Palette } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import { siteContent } from '../../data/site-content';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { applyTheme, getInitialTheme, themes, type ThemeName } from '../../lib/theme';
import { cn } from '../../lib/cn';
import { MobileDrawer } from './MobileDrawer';

export function Navbar() {
  const scrollY = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName>(themes.clinical);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);
  const toggleTheme = () => {
    const next = theme === themes.clinical ? themes.bold : themes.clinical;
    setTheme(next);
    applyTheme(next);
  };

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrollY > 40 ? 'rgba(255,255,255,.82)' : 'rgba(255,255,255,.22)',
          boxShadow: scrollY > 40 ? '0 12px 40px rgba(15,23,42,.08)' : '0 0 0 rgba(15,23,42,0)',
        }}
        transition={{ duration: 0.45 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-white/30 backdrop-blur-xl"
      >
        <div className="page-shell flex h-[76px] items-center justify-between">
          <Link
            to="/"
            className="focus-ring flex items-center gap-3 rounded-xl"
            aria-label="Lumena home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-[14px] bg-primary text-white">
              <HeartPulse className="h-5 w-5" />
            </span>
            <div>
              <span className="block font-display text-lg font-extrabold leading-none">
                {siteContent.brand.name}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
                {siteContent.brand.descriptor}
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/60 hover:text-primary',
                    isActive && item.href !== '/#team' ? 'text-primary' : 'text-ink/75',
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="focus-ring hidden rounded-full border border-line/70 bg-white/60 p-3 text-primary transition hover:bg-white sm:inline-flex"
              aria-label="Switch color theme"
            >
              <Palette className="h-4 w-4" />
            </button>
            <Link
              to="/contact"
              className="focus-ring hidden rounded-full bg-primary px-5 py-3 text-sm font-bold text-white shadow-glow transition duration-500 hover:scale-[1.025] hover:bg-primary-dark md:inline-flex"
            >
              {siteContent.common.book}
            </Link>
            <button
              onClick={() => setOpen(true)}
              className="focus-ring rounded-full border border-line/70 bg-white/70 p-3 lg:hidden"
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
