import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Ticket, ChevronRight, Music2 } from 'lucide-react';
import { navLinks } from '../data/mockData';

export default function Navbar({ onOpenBooking, onOpenStory }) {
  const [activeNav, setActiveNav] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full">
      <nav className="mx-auto flex max-w-[1720px] items-center justify-between px-6 pt-7 pb-4 md:px-12 lg:px-16">
        {/* Brand Logo (Left) */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="group flex items-center gap-3.5 select-none"
        >
          {/* Stylized Golden Treble Clef */}
          <div className="relative flex h-10 w-10 items-center justify-center">
            <svg
              viewBox="0 0 24 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-[#E5B842] drop-shadow-[0_0_10px_rgba(229,184,66,0.6)] transition-transform duration-500 group-hover:scale-110"
            >
              <path
                d="M12.5 2C12.5 2 13 8 9 11C6.5 12.8 5 15.5 5 18.5C5 22.6 8.1 26 12 26C16.4 26 19.5 22.4 19.5 18C19.5 14.5 17 11.8 14 11V2H12.5ZM12 4V13.2C10.5 13.8 9.5 15.2 9.5 17C9.5 19.2 11.2 21 13.5 21C15.7 21 17.5 19.2 17.5 17C17.5 14.2 15.5 12 12.5 11.8V4H12ZM12 24C10.3 24 9 22.7 9 21C9 19.3 10.3 18 12 18C13.7 18 15 19.3 15 21C15 22.7 13.7 24 12 24ZM12 27.5C12 29 11 30.5 9 30.5C7.5 30.5 6.5 29.5 6.5 28.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute inset-0 rounded-full bg-[#E5B842]/10 blur-md pointer-events-none" />
          </div>

          <div className="flex flex-col tracking-[0.28em] text-left">
            <span className="font-cinzel text-[11px] font-semibold text-[#D4AF37] tracking-[0.34em] uppercase">
              The Grand
            </span>
            <span className="font-cinzel text-sm md:text-base font-bold tracking-[0.38em] text-[#F5EEDC] group-hover:text-white transition-colors">
              Symphony
            </span>
          </div>
        </motion.a>

        {/* Center Navigation Links (Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="hidden items-center gap-7 lg:flex xl:gap-10"
        >
          {navLinks.map((link) => {
            const isActive = activeNav === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveNav(link.id);
                  if (link.id === 'events') onOpenBooking();
                  if (link.id === 'about' || link.id === 'orchestra') onOpenStory();
                }}
                className="group relative flex flex-col items-center py-2 text-[11px] font-medium tracking-[0.24em] transition-colors focus:outline-none"
              >
                <span
                  className={`${
                    isActive
                      ? 'text-[#F5D061] font-semibold drop-shadow-[0_0_8px_rgba(245,208,97,0.4)]'
                      : 'text-[#C9BFB0] hover:text-[#FFF4D2]'
                  } transition-colors duration-300 uppercase`}
                >
                  {link.label}
                </span>

                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 h-[2px] w-5 rounded-full bg-[#E5B842] shadow-[0_0_8px_#E5B842]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Right CTA Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3.5"
        >
          {/* Book Tickets Pill Button */}
          <button
            onClick={onOpenBooking}
            className="group relative hidden sm:inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-black/40 px-6 py-2.5 text-[11px] font-semibold tracking-[0.22em] text-[#F5EEDC] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 hover:text-white hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] active:scale-95"
          >
            <span>Book Tickets</span>
            <Ticket className="h-3.5 w-3.5 text-[#E5B842] transition-transform duration-300 group-hover:rotate-12" />
          </button>

          {/* Hamburger Menu Circle Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/80 hover:bg-[#D4AF37]/10 active:scale-90"
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
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
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
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx }}
                    onClick={() => {
                      setActiveNav(link.id);
                      setMobileMenuOpen(false);
                      if (link.id === 'events') onOpenBooking();
                      if (link.id === 'about' || link.id === 'orchestra') onOpenStory();
                    }}
                    className="group flex items-center justify-between py-2 text-left font-serif-luxury text-2xl tracking-widest text-[#E8E1D3] transition-colors hover:text-[#F5D061]"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1 text-[#E5B842]" />
                  </motion.button>
                ))}
              </div>

              {/* Bottom Quick Action */}
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-gold-primary flex w-full items-center justify-center gap-2 rounded-full py-3 text-xs tracking-[0.2em] uppercase font-bold"
                >
                  <Ticket className="h-4 w-4" />
                  <span>Reserve Seats Now</span>
                </button>
                <p className="text-center text-[10px] tracking-widest text-white/40 uppercase">
                  City Concert Hall • Season 2024 / 2025
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
