import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((module) => ({ default: module.About })));
const Contact = lazy(() =>
  import('./pages/Contact').then((module) => ({ default: module.Contact })),
);
const Services = lazy(() =>
  import('./pages/Services').then((module) => ({ default: module.Services })),
);
const Healthcare = lazy(() =>
  import('./pages/Healthcare').then((module) => ({ default: module.Healthcare })),
);
const NetworkTechnology = lazy(() =>
  import('./pages/NetworkTechnology').then((module) => ({ default: module.NetworkTechnology })),
);

export default function App() {
  const location = useLocation();
  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0, behavior: 'instant' });
    const scrollToAnchor = () => {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return true;
      }
      return false;
    };
    if (!location.hash || scrollToAnchor()) return;
    const observer = new MutationObserver(() => {
      if (scrollToAnchor()) observer.disconnect();
    });
    observer.observe(document.getElementById('root')!, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [location]);
  return (
    <>
      <a
        href="#main-content"
        className="focus-ring fixed left-4 top-3 z-[70] -translate-y-20 rounded-full bg-primary-dark px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <Suspense
        fallback={
          <main className="page-shell min-h-screen pt-32" aria-busy="true">
            <p role="status">Loading page…</p>
          </main>
        }
      >
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home-healthcare" element={<Healthcare />} />
            <Route path="/corporate-healthcare" element={<Healthcare corporate />} />
            <Route path="/network-technology" element={<NetworkTechnology />} />
          </Routes>
        </div>
      </Suspense>
      <Footer />
    </>
  );
}
