import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ticket, ChevronRight, Music2 } from 'lucide-react';
import { navLinks } from '../data/mockData';

export default function Navbar({ onOpenBooking, onOpenStory, currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ['hero-section', 'about-section', 'events-section', 'artists-section', 'community-section', 'contact-section'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          const idMap = {
            'hero-section': 'home',
            'about-section': 'about',
            'events-section': 'events',
            'artists-section': 'artists',
            'community-section': 'community',
            'contact-section': 'contact',
          };
          setActiveSection(idMap[sections[i]]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    const sectionMap = {
      home: 'hero-section',
      about: 'about-section',
      events: 'events-section',
      artists: 'artists-section',
      community: 'community-section',
      contact: 'contact-section',
    };

    const targetId = sectionMap[id] || id;
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      return;
    }

    // If on another page, navigate to home and scroll to section
    if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const headerOffset = 70;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
          setActiveSection(id);
        }
      }, 120);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-[#070605]/92 backdrop-blur-xl border-b border-[#D4AF37]/25 shadow-[0_8px_32px_rgba(0,0,0,0.85)] py-3'
          : 'bg-gradient-to-b from-[#070605]/90 via-[#070605]/60 to-transparent py-5 border-b border-white/[0.05]'
      }`}
    >
      <nav className="mx-auto flex max-w-[1720px] items-center justify-between px-6 md:px-12 lg:px-16">
        {/* Brand Logo (Left) */}
        <button
          onClick={() => (onNavigate ? onNavigate('home') : (window.location.hash = '#home'))}
          className="group shrink-0 flex items-center gap-3.5 select-none focus:outline-none text-left"
        >
          {/* Stylized Golden Treble Clef */}
          <div className="relative flex h-10 w-10 items-center justify-center">
            <svg
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#E5B842] drop-shadow-[0_0_12px_rgba(229,184,66,0.65)] transition-transform duration-500 group-hover:scale-110"
            >
              <path
                d="M12.5 2C12.5 2 13 8 9 11C6.5 12.8 5 15.5 5 18.5C5 22.6 8.1 26 12 26C16.4 26 19.5 22.4 19.5 18C19.5 14.5 17 11.8 14 11V2H12.5ZM12 4V13.2C10.5 13.8 9.5 15.2 9.5 17C9.5 19.2 11.2 21 13.5 21C15.7 21 17.5 19.2 17.5 17C17.5 14.2 15.5 12 12.5 11.8V4H12ZM12 24C10.3 24 9 22.7 9 21C9 19.3 10.3 18 12 18C13.7 18 15 19.3 15 21C15 22.7 13.7 24 12 24ZM12 27.5C12 29 11 30.5 9 30.5C7.5 30.5 6.5 29.5 6.5 28.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 rounded-full bg-[#E5B842]/15 blur-md pointer-events-none" />
          </div>

          <div className="flex flex-col tracking-[0.28em] text-left">
            <span className="font-cinzel text-[10px] font-semibold text-[#D4AF37] tracking-[0.32em] uppercase">
              The Grand
            </span>
            <span className="font-cinzel text-base md:text-lg font-bold tracking-[0.34em] text-[#F5EEDC] group-hover:text-white transition-colors">
              Symphony
            </span>
          </div>
        </button>

        {/* Center Navigation Links (Desktop) - Contained in an Elegant Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/25 bg-black/50 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
        >
          {navLinks.map((link) => {
            const isActive = link.id === currentPage;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`group relative px-4 py-2 text-[11px] font-medium tracking-[0.2em] transition-all duration-300 rounded-full focus:outline-none uppercase ${
                  isActive
                    ? 'text-[#F5D061] font-semibold bg-[#E5B842]/15 shadow-[0_0_16px_rgba(229,184,66,0.25)] border border-[#E5B842]/35'
                    : 'text-[#C9BFB0] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span>{link.label}</span>

                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicatorPill"
                    className="absolute inset-0 rounded-full bg-[#E5B842]/10 pointer-events-none -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Right CTA Actions */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="shrink-0 flex items-center gap-3.5"
        >
          {/* Book Tickets Luxury Pill Button */}
          <button
            onClick={onOpenBooking}
            className="group relative hidden sm:inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/60 bg-gradient-to-r from-[#D4AF37]/20 via-[#E5B842]/15 to-[#D4AF37]/20 px-6 py-2.5 text-[11px] font-bold tracking-[0.22em] text-[#F5EEDC] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#F5D061] hover:bg-[#E5B842] hover:text-black hover:shadow-[0_0_28px_rgba(229,184,66,0.45)] active:scale-95"
          >
            <span>Book Tickets</span>
            <Ticket className="h-3.5 w-3.5 text-[#E5B842] transition-transform duration-300 group-hover:rotate-12 group-hover:text-black" />
          </button>

          {/* Hamburger Menu Circle Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-black/55 backdrop-blur-md transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 active:scale-90"
          >
            <div className="flex flex-col items-center justify-center gap-[5px]">
              <span className="h-[1.5px] w-4.5 bg-[#F5EEDC] transition-all duration-300 group-hover:bg-[#F5D061] group-hover:w-5" />
              <span className="h-[1.5px] w-4.5 bg-[#F5EEDC] transition-all duration-300 group-hover:bg-[#F5D061] group-hover:w-3.5" />
            </div>
          </button>
        </motion.div>
      </nav>

      {/* Mobile / Fullscreen Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-full w-full max-w-md flex-col justify-between border-l border-[#D4AF37]/30 bg-[#0B0907] p-8 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <Music2 className="h-5 w-5 text-[#E5B842]" />
                  <span className="font-cinzel text-sm font-bold tracking-[0.25em] text-[#F5EEDC]">
                    THE GRAND SYMPHONY
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full border border-white/20 p-2 text-white/80 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links List */}
              <div className="my-auto flex flex-col gap-4 py-8">
                {navLinks.map((link, idx) => {
                  const isActive = link.id === currentPage;
                  return (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNavClick(link.id);
                      }}
                      className={`group flex items-center justify-between py-2 text-left font-serif-luxury text-2xl tracking-widest transition-colors ${
                        isActive ? 'text-[#F5D061] font-bold' : 'text-[#E8E1D3] hover:text-[#F5D061]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 text-[#E5B842]" />
                    </motion.button>
                  );
                })}
              </div>

              {/* Bottom Quick Action */}
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-gold-primary flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-xs tracking-[0.2em] uppercase font-bold"
                >
                  <Ticket className="h-4 w-4" />
                  <span>Reserve Seats Now</span>
                </button>
                <p className="text-center text-[10px] tracking-widest text-white/40 uppercase">
                  City Concert Hall • Season 2026 / 2027
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
