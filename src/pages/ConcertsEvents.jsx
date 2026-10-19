import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  ChevronRight,
  Music,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  Info,
  CheckCircle2,
  ExternalLink,
  Volume2,
  Star,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import ContactModal from '../components/ContactModal';
import { concertsPageData } from '../data/mockData';

// Ambient Background Glow Component
function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full bg-[#E5B842]/[0.035] blur-[140px]" />
      <div className="absolute top-[45%] right-[10%] h-[600px] w-[600px] rounded-full bg-[#D4AF37]/[0.03] blur-[160px]" />
      <div className="absolute bottom-[15%] left-[25%] h-[550px] w-[550px] rounded-full bg-[#E5B842]/[0.035] blur-[150px]" />
    </div>
  );
}

// Section Header Eyebrow Badge
function SectionBadge({ children, icon: Icon = Sparkles }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#16120D]/90 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.12)]">
      <Icon className="h-3.5 w-3.5 text-[#E5B842] animate-pulse" />
      <span className="font-cinzel text-[11px] font-semibold tracking-[0.28em] text-[#E5B842] uppercase">
        {children}
      </span>
    </div>
  );
}

// Scroll Reveal Wrapper
function RevealSection({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ConcertsEvents({ onNavigate }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedConcert, setSelectedConcert] = useState(concertsPageData.upcomingConcerts[0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);

  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const featuredRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectFeatured = (concert) => {
    setSelectedConcert(concert);
    scrollTo(featuredRef);
  };

  const filteredConcerts =
    activeCategory === 'All'
      ? concertsPageData.upcomingConcerts
      : concertsPageData.upcomingConcerts.filter((c) =>
          c.category.toLowerCase().includes(activeCategory.toLowerCase())
        );

  return (
    <div className="relative min-h-screen bg-[#070605] text-[#ECE5D8] selection:bg-[#E5B842]/30 selection:text-white">
      <AmbientOrbs />

      {/* Navigation */}
      <Navbar
        currentPage="events"
        onNavigate={onNavigate}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-20">
        {/* Background Image with Layered Gradients */}
        <div className="absolute inset-0 -z-10">
          <img
            src={concertsPageData.hero.bgImage}
            alt="Concert Hall"
            className="h-full w-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070605] via-transparent to-[#070605]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070605]/50 to-[#070605]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge icon={Music}>{concertsPageData.hero.badge}</SectionBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F8F5EE] leading-[1.08]"
          >
            Experience the <span className="italic gold-text-gradient">Extraordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl font-sans-clean text-base md:text-lg text-[#C9BFB0] leading-relaxed"
          >
            {concertsPageData.hero.description}
          </motion.p>

          {/* Hero Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => scrollTo(upcomingRef)}
              className="btn-gold-primary group flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300"
            >
              <span>{concertsPageData.hero.primaryButton}</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo(pastRef)}
              className="group flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#15120E]/70 px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#ECE5D8] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 hover:text-white hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            >
              <span>{concertsPageData.hero.secondaryButton}</span>
              <Compass className="h-4 w-4 text-[#E5B842] transition-transform group-hover:rotate-45" />
            </button>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#D4AF37]/20 pt-8"
          >
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">3</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Gala Concerts</p>
            </div>
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">90+</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Musicians</p>
            </div>
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">Acoustic</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Master Halls</p>
            </div>
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">100%</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Live Orchestra</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — EVENTS LISTING */}
      <section ref={upcomingRef} className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionBadge icon={Calendar}>Season Schedule 2026</SectionBadge>
              <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
                Upcoming <span className="italic gold-text-gradient">Concerts</span>
              </h2>
              <p className="mt-3 max-w-xl text-sm md:text-base text-[#B3A898]">
                Immerse yourself in live symphonic masterworks. Reserve priority seating for the 2026 Autumn & Winter season.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 border border-[#D4AF37]/25 rounded-full p-1.5 bg-[#120F0B]/80 backdrop-blur-md">
              {['All', 'Orchestral', 'Chamber', 'Finale'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#E5B842] text-black shadow-[0_0_15px_rgba(229,184,66,0.5)]'
                      : 'text-[#C9BFB0] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Concert Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredConcerts.map((concert, idx) => (
              <RevealSection key={concert.id} delay={idx * 0.15}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-b from-[#18140F]/95 to-[#0E0C09]/95 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E5B842]/60 hover:shadow-[0_12px_40px_rgba(212,175,55,0.18)]">
                  {/* Top Image Preview with Badge */}
                  <div className="relative h-56 w-full overflow-hidden rounded-xl mb-6">
                    <img
                      src={concert.image}
                      alt={concert.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09] via-transparent to-black/30" />
                    
                    <span className="absolute top-3 left-3 rounded-full border border-[#D4AF37]/40 bg-black/70 px-3 py-1 font-cinzel text-[10px] tracking-wider text-[#F5D061] backdrop-blur-md uppercase">
                      {concert.badge}
                    </span>

                    <span className="absolute bottom-3 right-3 rounded-full bg-[#E5B842]/90 px-3 py-1 font-sans-clean text-xs font-bold text-black shadow-md">
                      {concert.tickets}
                    </span>
                  </div>

                  {/* Concert Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-xs text-[#E5B842] font-semibold tracking-wider uppercase mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{concert.date}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#F8F5EE] group-hover:text-[#F5D061] transition-colors">
                      {concert.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#B3A898] leading-relaxed line-clamp-2">
                      {concert.subtitle}
                    </p>

                    <div className="mt-6 space-y-2 border-t border-white/10 pt-4 text-xs text-[#C9BFB0]">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-[#E5B842]" />
                        <span className="font-medium text-[#ECE5D8]">{concert.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-[#E5B842]" />
                        <span>{concert.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 grid grid-cols-2 gap-3 pt-4 border-t border-[#D4AF37]/20">
                    <button
                      onClick={() => handleSelectFeatured(concert)}
                      className="flex items-center justify-center gap-1.5 rounded-lg border border-[#D4AF37]/40 bg-white/5 py-2.5 text-xs font-semibold tracking-wider text-[#ECE5D8] transition-colors hover:border-[#E5B842] hover:bg-[#E5B842]/10 hover:text-white"
                    >
                      <Info className="h-3.5 w-3.5 text-[#E5B842]" />
                      <span>Event Details</span>
                    </button>

                    <button
                      onClick={() => setBookingOpen(true)}
                      className="btn-gold-primary flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold tracking-wider uppercase shadow-md"
                    >
                      <Ticket className="h-3.5 w-3.5" />
                      <span>Book Tickets</span>
                    </button>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — INDIVIDUAL EVENT DETAILS TEMPLATE (DYNAMIC / INTERACTIVE) */}
      <section ref={featuredRef} className="relative z-10 px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-b from-[#0E0C09] via-[#14100C] to-[#0A0806] border-t border-b border-[#D4AF37]/20">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="text-center mb-12">
            <SectionBadge icon={Star}>FEATURED CONCERT</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              {selectedConcert.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              Step into the world of Wolfgang Amadeus Mozart with a concert celebrating the elegance, emotion, and brilliance of classical composition.
            </p>
          </RevealSection>

          {/* Interactive Concert Selector Tabs */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-[#070605]/80 p-2 backdrop-blur-md">
              {concertsPageData.upcomingConcerts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcert(c)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    selectedConcert.id === c.id
                      ? 'bg-[#E5B842] text-black shadow-[0_0_20px_rgba(229,184,66,0.4)]'
                      : 'text-[#C9BFB0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          {/* Event Detail Showcase Card */}
          <RevealSection delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#1A150F]/90 via-[#110E0A]/95 to-[#080706] p-8 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Visual Column */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-2xl">
                    <img
                      src={selectedConcert.image}
                      alt={selectedConcert.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Floating Acoustic Card */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
                      <p className="font-cinzel text-[10px] tracking-widest text-[#E5B842] uppercase">
                        Hall Acoustics
                      </p>
                      <p className="font-serif-luxury text-sm font-semibold text-white mt-1">
                        Meyer Sound Constellation Active Acoustics Tier 1
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#E5B842] uppercase">
                      Event Information
                    </span>
                    <h3 className="mt-1 font-serif-luxury text-2xl sm:text-4xl text-[#F8F5EE]">
                      {selectedConcert.title}
                    </h3>
                  </div>

                  {/* Key Fact Sheet */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-[#D4AF37]/20 bg-black/40 p-5">
                    <div className="space-y-1">
                      <p className="font-cinzel text-[10px] tracking-wider text-[#A89F91] uppercase">Date</p>
                      <p className="font-medium text-[#F5D061]">{selectedConcert.date}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-cinzel text-[10px] tracking-wider text-[#A89F91] uppercase">Time</p>
                      <p className="font-medium text-[#ECE5D8]">{selectedConcert.time}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-cinzel text-[10px] tracking-wider text-[#A89F91] uppercase">Venue</p>
                      <p className="font-medium text-[#ECE5D8]">{selectedConcert.location}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-cinzel text-[10px] tracking-wider text-[#A89F91] uppercase">Address</p>
                      <p className="font-medium text-[#ECE5D8]">{selectedConcert.address}</p>
                    </div>
                    <div className="space-y-1 sm:col-span-2 border-t border-white/10 pt-3">
                      <p className="font-cinzel text-[10px] tracking-wider text-[#A89F91] uppercase">Performers</p>
                      <p className="font-medium text-[#ECE5D8]">{selectedConcert.performers}</p>
                    </div>
                    <div className="space-y-1 sm:col-span-2 border-t border-white/10 pt-3">
                      <p className="font-cinzel text-[10px] tracking-wider text-[#A89F91] uppercase">Tickets</p>
                      <p className="font-serif-luxury text-lg font-bold text-[#E5B842]">{selectedConcert.tickets}</p>
                    </div>
                  </div>

                  {/* What to Expect */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <h4 className="font-cinzel text-xs font-bold tracking-widest text-[#E5B842] uppercase flex items-center gap-2">
                      <Volume2 className="h-4 w-4" />
                      What to Expect
                    </h4>
                    <p className="mt-2 text-sm text-[#C9BFB0] leading-relaxed">
                      Enjoy an evening of expressive melodies, accomplished musicianship, and timeless orchestral music in a memorable concert setting.
                    </p>
                  </div>

                  {/* CTA Book Your Tickets */}
                  <div className="pt-2">
                    <button
                      onClick={() => setBookingOpen(true)}
                      className="btn-gold-primary group flex w-full sm:w-auto items-center justify-center gap-3 rounded-full px-9 py-4 text-xs font-bold tracking-[0.24em] uppercase shadow-[0_0_30px_rgba(229,184,66,0.35)]"
                    >
                      <Ticket className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      <span>Book Your Tickets</span>
                    </button>
                    <p className="mt-4 text-xs italic text-[#A89F91]">
                      *All event information and ticket details are placeholders until confirmed by the organization.*
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 4 — PAST PERFORMANCES */}
      <section ref={pastRef} className="relative z-10 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge icon={Compass}>ARCHIVE & MEMORIES</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              Memories from the <span className="italic gold-text-gradient">Stage</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              Revisit the performances that brought our musicians and audiences together. Explore highlights from previous concerts, special collaborations, and unforgettable musical moments.
            </p>
          </RevealSection>

          {/* Past Performances Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {concertsPageData.pastPerformances.map((perf, idx) => (
              <RevealSection key={perf.id} delay={idx * 0.15}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#120F0C]/80 p-6 backdrop-blur-md transition-all duration-500 hover:border-[#E5B842]/50 hover:-translate-y-1.5 hover:shadow-[0_10px_35px_rgba(212,175,55,0.15)]">
                  <div className="relative h-48 w-full overflow-hidden rounded-xl mb-5">
                    <img
                      src={perf.image}
                      alt={perf.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 font-cinzel text-[10px] text-[#E5B842] border border-[#D4AF37]/30 backdrop-blur-sm">
                      {perf.season}
                    </span>
                  </div>

                  <div className="flex-1 space-y-2">
                    <p className="text-xs text-[#E5B842] font-semibold">{perf.date}</p>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F5EE] group-hover:text-[#F5D061] transition-colors">
                      {perf.title}
                    </h3>
                    <p className="text-xs text-[#A89F91] flex items-center gap-1.5 pt-1">
                      <MapPin className="h-3 w-3 text-[#E5B842]" />
                      {perf.hall} · {perf.attendees}
                    </p>
                    <p className="text-xs text-[#C9BFB0] pt-2 italic leading-relaxed">
                      "{perf.highlight}"
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* Past Button */}
          <RevealSection delay={0.3} className="mt-14 text-center">
            <button
              onClick={() => setArchiveModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-[#15120E] px-8 py-4 text-xs font-bold tracking-[0.22em] text-[#ECE5D8] uppercase transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 hover:text-white hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            >
              <span>Explore Past Performances</span>
              <ArrowRight className="h-4 w-4 text-[#E5B842] transition-transform group-hover:translate-x-1" />
            </button>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 5 — EVENTS CTA */}
      <section className="relative z-10 px-6 py-28 md:px-12 lg:px-20 overflow-hidden border-t border-[#D4AF37]/20">
        <div className="absolute inset-0 -z-10">
          <img
            src="/orchestra-bg.jpg"
            alt="Concert Background"
            className="h-full w-full object-cover filter brightness-[0.25] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/80 to-[#070605]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <RevealSection>
            <SectionBadge icon={Ticket}>RESERVE YOUR SEAT</SectionBadge>
            <h2 className="mt-4 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE] leading-tight">
              Your Next Musical Experience <span className="italic gold-text-gradient">Awaits</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans-clean text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              Join us for an upcoming performance and discover the beauty of classical music live.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={() => scrollTo(upcomingRef)}
                className="btn-gold-primary group flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase"
              >
                <span>Browse Events</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setContactOpen(true)}
                className="group flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#16120D]/80 px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#ECE5D8] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 hover:text-white"
              >
                <span>Contact Our Team</span>
                <Users className="h-4 w-4 text-[#E5B842]" />
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialEvent={selectedConcert}
      />

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Past Archive Modal */}
      <AnimatePresence>
        {archiveModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
            onClick={() => setArchiveModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl border border-[#D4AF37]/40 bg-[#110E0A] p-8 shadow-2xl"
            >
              <h3 className="font-serif-luxury text-3xl font-bold text-[#F8F5EE]">
                Past Concert Archive
              </h3>
              <p className="mt-2 text-sm text-[#C9BFB0]">
                Over 120 historic performances documented with high-definition audio and stage photography. Full digital archives accessible for symphony patrons.
              </p>

              <div className="mt-6 space-y-3">
                {concertsPageData.pastPerformances.map((p) => (
                  <div key={p.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                    <div>
                      <p className="font-serif-luxury text-lg font-bold text-white">{p.title}</p>
                      <p className="text-xs text-[#E5B842]">{p.hall} · {p.date}</p>
                    </div>
                    <span className="font-cinzel text-xs text-[#A89F91]">{p.attendees}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setArchiveModalOpen(false)}
                  className="rounded-full border border-[#D4AF37]/40 px-6 py-2.5 text-xs font-semibold uppercase text-white hover:bg-white/10"
                >
                  Close Archive
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
