import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUp,
  MapPin,
  Calendar,
  Phone,
  Sparkles,
  Ticket,
  Music2,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { footerData } from '../data/mockData';

export default function Footer({ onOpenBooking, onOpenStory, onOpenSponsor, onNavigate }) {
  const [activeVenueIdx, setActiveVenueIdx] = useState(0);
  const activeVenue = footerData.venues[activeVenueIdx];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (action) => {
    if (action === 'events' || action === 'calendar') {
      if (onNavigate) onNavigate('events');
      else window.location.hash = '#events';
    } else if (action === 'about' || action === 'legacy' || action === 'directors') {
      if (onNavigate) onNavigate('about');
      else window.location.hash = '#about';
    } else if (action === 'artists' || action === 'orchestra') {
      if (onNavigate) onNavigate('artists');
      else window.location.hash = '#artists';
    } else if (action === 'gallery' || action === 'media') {
      if (onNavigate) onNavigate('gallery');
      else window.location.hash = '#gallery';
    } else if (action === 'booking' || action.startsWith('event-')) {
      if (onOpenBooking) onOpenBooking();
    } else if (action === 'sponsor' || action === 'endow' || action === 'academy') {
      if (onOpenSponsor) onOpenSponsor();
    } else {
      if (onOpenStory) onOpenStory();
    }
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#060504] text-[#F4EFE6] pt-16 pb-12 border-t border-[#D4AF37]/25">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#E5B842]/6 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[350px] w-[350px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
        
        {/* ================= 1. INTERACTIVE WORLD RESIDENCIES BAR ================= */}
        <div className="rounded-2xl border border-[#D4AF37]/25 bg-[#0C0A08]/80 p-5 md:p-6 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#E5B842]/10 text-[#F5D061]">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <span className="font-cinzel text-[10px] font-bold tracking-[0.28em] text-[#D4AF37] uppercase block">
                  Global Concert Residencies
                </span>
                <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#F7F4EE]">
                  World-Renowned Acoustic Halls
                </span>
              </div>
            </div>

            {/* Interactive Venue Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {footerData.venues.map((venue, idx) => (
                <button
                  key={venue.name}
                  onClick={() => setActiveVenueIdx(idx)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeVenueIdx === idx
                      ? 'border border-[#F5D061] bg-[#E5B842]/20 text-[#FFF1BE] shadow-[0_0_15px_rgba(229,184,66,0.3)]'
                      : 'border border-white/10 bg-black/40 text-white/60 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {venue.city}
                </button>
              ))}
            </div>
          </div>

          {/* Active Venue Details Banner */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVenue.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs"
            >
              <div className="flex items-center gap-3">
                <span className="font-cinzel text-sm font-bold text-[#F5D061]">
                  {activeVenue.name}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/70">{activeVenue.hall}</span>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 text-[#E5B842]">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="font-mono tracking-wider">{activeVenue.residency}</span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="font-cinzel text-[11px] font-bold text-[#F5D061] tracking-wider hover:underline uppercase inline-flex items-center gap-1"
                >
                  <span>Select Season Seats</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= 2. MAIN FOOTER GRID ================= */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col text-left">
            {/* Brand Logo */}
            <div className="flex items-center gap-3 group select-none">
              <div className="relative flex h-10 w-10 items-center justify-center">
                <svg
                  viewBox="0 0 24 32"
                  fill="none"
                  className="h-8 w-8 text-[#E5B842] drop-shadow-[0_0_10px_rgba(229,184,66,0.6)]"
                >
                  <path
                    d="M12.5 2C12.5 2 13 8 9 11C6.5 12.8 5 15.5 5 18.5C5 22.6 8.1 26 12 26C16.4 26 19.5 22.4 19.5 18C19.5 14.5 17 11.8 14 11V2H12.5ZM12 4V13.2C10.5 13.8 9.5 15.2 9.5 17C9.5 19.2 11.2 21 13.5 21C15.7 21 17.5 19.2 17.5 17C17.5 14.2 15.5 12 12.5 11.8V4H12ZM12 24C10.3 24 9 22.7 9 21C9 19.3 10.3 18 12 18C13.7 18 15 19.3 15 21C15 22.7 13.7 24 12 24ZM12 27.5C12 29 11 30.5 9 30.5C7.5 30.5 6.5 29.5 6.5 28.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="absolute inset-0 rounded-full bg-[#E5B842]/15 blur-md" />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-cinzel text-xs font-semibold text-[#D4AF37] tracking-[0.32em] uppercase">
                  {footerData.brand.founded}
                </span>
                <span className="font-cinzel text-base font-bold tracking-[0.34em] text-[#F7F4EE]">
                  THE GRAND SYMPHONY
                </span>
              </div>
            </div>

            <p className="mt-4 font-sans-clean text-xs leading-relaxed text-[#BDB1A1] max-w-sm">
              {footerData.brand.motto}
            </p>

            {/* Quick Box Office Hotline */}
            <div className="mt-6 flex flex-col gap-2 rounded-xl border border-white/10 bg-black/40 p-3.5 max-w-sm">
              <span className="text-[10px] tracking-widest text-[#D4AF37] uppercase font-cinzel font-bold">
                Concert Hall Box Office
              </span>
              <div className="flex items-center gap-2 text-xs text-white/90 font-mono">
                <Phone className="h-3.5 w-3.5 text-[#E5B842]" />
                <span>+43 1 505 8190 (Vienna Desk)</span>
              </div>
              <span className="text-[10px] text-white/40">
                Mon – Sat: 09:00 – 20:00 CET
              </span>
            </div>
          </div>

          {/* Nav Columns (Cols 5-10) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerData.columns.map((col, idx) => (
              <div key={idx} className="flex flex-col text-left">
                <span className="font-cinzel text-xs font-bold tracking-[0.24em] text-[#E5B842] uppercase mb-4 block">
                  {col.title}
                </span>
                <ul className="space-y-2.5">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <button
                        onClick={() => handleLinkClick(link.action)}
                        className="group flex items-center text-xs text-[#CBC1B1] hover:text-[#FFF1BE] transition-colors font-sans-clean"
                      >
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {link.label}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Callout: Ticket Reservation Shortcut (Cols 11-12) */}
          <div className="lg:col-span-3 flex flex-col justify-between text-left rounded-2xl border border-[#D4AF37]/35 bg-[#120F0B]/70 p-5 shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-[#E5B842] mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="font-cinzel text-[10px] font-bold tracking-[0.26em] uppercase">
                  World Premiere
                </span>
              </div>
              <h4 className="font-serif-luxury text-xl font-normal text-[#F7F4EE]">
                Experience Beethoven, Mozart & Tchaikovsky Live
              </h4>
              <p className="mt-2 text-[11px] text-[#AFA495] leading-relaxed">
                Join thousands of music patrons in the world's most acoustically sublime concert halls.
              </p>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-gold-primary mt-6 flex items-center justify-center gap-2 rounded-full py-3 text-xs uppercase font-bold tracking-[0.2em] text-[#120E06]"
            >
              <Ticket className="h-3.5 w-3.5" />
              <span>Reserve Tickets</span>
            </button>
          </div>

        </div>

        {/* ================= 3. BOTTOM UTILITY & SOCIALS BAR ================= */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          
          {/* Royal Patronage Warrant */}
          <div className="flex items-center gap-2 text-left">
            <div className="h-2 w-2 rotate-45 bg-[#E5B842]" />
            <span className="font-cinzel text-[10px] tracking-[0.22em] text-[#D4AF37] uppercase">
              Under the High Patronage of the World Philharmonic Council
            </span>
          </div>

          {/* Social Icons with Golden Sheen */}
          <div className="flex items-center gap-3">
            {footerData.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-[#E5B842] hover:bg-[#E5B842]/20 hover:text-[#F5D061] hover:scale-105"
                aria-label={soc.name}
              >
                <Music2 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              </a>
            ))}

            {/* Back to Top Circular Button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-black/60 text-[#F5D061] backdrop-blur-md transition-all duration-300 hover:border-[#FFF1BE] hover:bg-[#E5B842]/30 hover:scale-110 active:scale-95 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 font-mono">
          <p>© {new Date().getFullYear()} The Grand Symphony Orchestra. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Patronage</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">Acoustic Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
