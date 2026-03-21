import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, HOTEL } from '@/utils/constants';
import { openWhatsAppBooking } from '@/utils/contact';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection (only on home page)
      if (location.pathname === '/') {
        const sections = NAV_LINKS.map((l) => l.id);
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && window.scrollY + 120 >= el.offsetTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNav = (href) => {
    const id = href.replace('#', '');
    setMobileOpen(false);

    // If on a policy page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Scroll after a brief delay to allow page to load
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If on home page, scroll directly
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactBooking = () => {
    setMobileOpen(false);
    openWhatsAppBooking('Hi, I want to book a stay at The Himalayan Haven. Please share available rooms and pricing.');
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20">
          {/* Left Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(0, 3).map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.href)}
                className={`font-sans text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                  scrolled ? 'text-mahogany-900' : 'text-cream-50'
                } ${activeSection === link.id ? 'font-medium' : 'font-light'}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Logo */}
          <button
            onClick={() => handleNav('#home')}
            className="flex flex-col items-center gap-0.5"
          >
            <div className={`hidden sm:block text-xs tracking-[0.4em] uppercase font-sans font-light transition-colors duration-300 ${scrolled ? 'text-mahogany-700' : 'text-cream-200'}`}>
              The
            </div>
            <div className={`font-display text-lg sm:text-2xl font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase leading-none transition-colors duration-300 ${scrolled ? 'text-mahogany-900' : 'text-cream-50'}`}>
              {HOTEL.name.split(' ').slice(1).join(' ')}
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className={`h-px w-8 transition-colors duration-300 ${scrolled ? 'bg-gold-500' : 'bg-gold-400'}`} />
              <div className={`text-xs tracking-[0.3em] uppercase font-sans font-light transition-colors duration-300 ${scrolled ? 'text-mahogany-600' : 'text-cream-300'}`}>
                Manali
              </div>
              <div className={`h-px w-8 transition-colors duration-300 ${scrolled ? 'bg-gold-500' : 'bg-gold-400'}`} />
            </div>
          </button>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.slice(3).map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.href)}
                className={`font-sans text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                  scrolled ? 'text-mahogany-900' : 'text-cream-50'
                } ${activeSection === link.id ? 'font-medium' : 'font-light'}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={handleContactBooking}
              className={`font-sans text-sm tracking-widest uppercase px-6 py-2.5 rounded-full border transition-all duration-300 ${
                scrolled
                  ? 'border-mahogany-900 text-mahogany-900 hover:bg-mahogany-900 hover:text-cream-50'
                  : 'border-cream-50/70 text-cream-50 hover:bg-cream-50 hover:text-mahogany-900'
              }`}
            >
              Contact to Book
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-mahogany-900' : 'text-cream-50'}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-mahogany-950 flex flex-col items-center justify-center lg:hidden px-6"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-cream-200 hover:text-cream-50 transition-colors"
            >
              <X size={28} />
            </button>

            <div className="font-display text-2xl sm:text-3xl text-cream-50 font-light tracking-[0.16em] sm:tracking-[0.2em] uppercase mb-10 text-center leading-tight max-w-[90vw] break-words">
              {HOTEL.name.split(' ').slice(1).join(' ')}
            </div>

            <nav className="flex flex-col items-center gap-5 sm:gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNav(link.href)}
                  className="font-display text-[2rem] sm:text-3xl font-light text-cream-100 tracking-wide sm:tracking-wider hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={handleContactBooking}
              className="mt-12 btn-ghost"
            >
              Contact to Book
            </motion.button>

            <div className="mt-8 flex items-center gap-2 text-cream-400 text-sm">
              <Phone size={14} />
              <span>{HOTEL.phone}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
