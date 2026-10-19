import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Music2,
  Award,
  Calendar,
  ChevronRight,
  ArrowRight,
  Heart,
  UserCheck,
  Disc,
  Play,
  Volume2,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import { artistsPageData } from '../data/mockData';

// Ambient Background Glow Component
function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[8%] left-[12%] h-[480px] w-[480px] rounded-full bg-[#E5B842]/[0.035] blur-[140px]" />
      <div className="absolute top-[42%] right-[10%] h-[550px] w-[550px] rounded-full bg-[#D4AF37]/[0.03] blur-[150px]" />
      <div className="absolute bottom-[10%] left-[20%] h-[500px] w-[500px] rounded-full bg-[#E5B842]/[0.035] blur-[140px]" />
    </div>
  );
}

// Section Eyebrow Badge
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

// Scroll Reveal
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

export default function ArtistsMusicians({ onNavigate }) {
  const [selectedArtist, setSelectedArtist] = useState(artistsPageData.artists[0]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const detailRef = useRef(null);
  const listRef = useRef(null);

  const handleSelectArtist = (artist) => {
    setSelectedArtist(artist);
    detailRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNextArtist = () => {
    const currentIndex = artistsPageData.artists.findIndex((a) => a.id === selectedArtist.id);
    const nextIndex = (currentIndex + 1) % artistsPageData.artists.length;
    setSelectedArtist(artistsPageData.artists[nextIndex]);
    detailRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#070605] text-[#ECE5D8] selection:bg-[#E5B842]/30 selection:text-white">
      <AmbientOrbs />

      {/* Navigation */}
      <Navbar
        currentPage="artists"
        onNavigate={onNavigate}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={artistsPageData.hero.bgImage}
            alt="Violinist Artist"
            className="h-full w-full object-cover object-center filter brightness-[0.32] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070605] via-transparent to-[#070605]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070605]/45 to-[#070605]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge icon={Music2}>{artistsPageData.hero.badge}</SectionBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F8F5EE] leading-[1.08]"
          >
            The Talent Behind the <span className="italic gold-text-gradient">Harmony</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl font-sans-clean text-base md:text-lg text-[#C9BFB0] leading-relaxed"
          >
            {artistsPageData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => listRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold-primary group flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300"
            >
              <span>Explore Musicians</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#D4AF37]/20 pt-8"
          >
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">90+</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Orchestra Artists</p>
            </div>
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">18</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Nationalities</p>
            </div>
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">35+</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Grammy Credits</p>
            </div>
            <div className="text-center">
              <span className="font-serif-luxury text-2xl md:text-3xl font-bold text-[#F5D061]">300+</span>
              <p className="font-cinzel text-[10px] tracking-[0.2em] text-[#A89F91] uppercase mt-1">Years of Tradition</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — ARTIST PROFILES */}
      <section ref={listRef} className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge icon={Award}>VIRTUOSO ENSEMBLE</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              Artist <span className="italic gold-text-gradient">Profiles</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              Meet our acclaimed section leaders and soloists who bring masterworks to life with unmatched virtuosity and emotive clarity.
            </p>
          </RevealSection>

          {/* 4 Artist Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artistsPageData.artists.map((artist, idx) => {
              const isSelected = selectedArtist.id === artist.id;
              return (
                <RevealSection key={artist.id} delay={idx * 0.12}>
                  <div
                    onClick={() => handleSelectArtist(artist)}
                    className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
                      isSelected
                        ? 'border-[#E5B842] bg-[#1A150F] shadow-[0_12px_40px_rgba(229,184,66,0.25)]'
                        : 'border-[#D4AF37]/20 bg-[#120F0C]/90 hover:border-[#E5B842]/60 hover:shadow-[0_12px_35px_rgba(212,175,55,0.15)]'
                    } p-5 backdrop-blur-xl`}
                  >
                    {/* Artist Photo */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl mb-5">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C09] via-transparent to-transparent" />

                      <span className="absolute top-3 left-3 rounded-full border border-[#D4AF37]/40 bg-black/70 px-3 py-1 font-cinzel text-[10px] tracking-wider text-[#F5D061] backdrop-blur-md uppercase">
                        {artist.role}
                      </span>

                      {isSelected && (
                        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-[#E5B842] px-2.5 py-1 text-[10px] font-bold text-black shadow-lg">
                          <UserCheck className="h-3 w-3" /> Selected
                        </span>
                      )}
                    </div>

                    {/* Artist Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#F8F5EE] group-hover:text-[#F5D061] transition-colors">
                          {artist.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#E5B842] mt-0.5 tracking-wider uppercase">
                          {artist.role}
                        </p>
                        <p className="mt-3 text-xs text-[#B3A898] leading-relaxed line-clamp-3">
                          {artist.tagline}
                        </p>
                      </div>

                      <div className="mt-5 border-t border-white/10 pt-4">
                        <p className="text-[10px] font-cinzel tracking-wider text-[#A89F91] uppercase">
                          Specialization
                        </p>
                        <p className="text-xs font-medium text-[#ECE5D8] mt-0.5">
                          {artist.specialization}
                        </p>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSelectArtist(artist);
                          }}
                          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/35 bg-white/5 py-2 text-xs font-semibold tracking-wider text-[#ECE5D8] transition-colors group-hover:border-[#E5B842] group-hover:bg-[#E5B842]/10 group-hover:text-white"
                        >
                          <span>View Profile</span>
                          <ChevronRight className="h-3.5 w-3.5 text-[#E5B842]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — INDIVIDUAL ARTIST DETAIL */}
      <section ref={detailRef} className="relative z-10 px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-b from-[#0E0C09] via-[#14100C] to-[#0A0806] border-t border-b border-[#D4AF37]/20">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="text-center mb-12">
            <SectionBadge icon={Sparkles}>ARTIST PROFILE</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              {selectedArtist.name}
            </h2>
            <p className="mt-2 font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#E5B842] uppercase">
              {selectedArtist.instrument} · {selectedArtist.specialization}
            </p>
          </RevealSection>

          {/* Interactive Profile Card with AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedArtist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#19140E]/95 via-[#110E0A]/95 to-[#080706] p-8 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Portrait */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-[#D4AF37]/30 shadow-2xl">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/75 p-4 backdrop-blur-md">
                      <p className="font-cinzel text-[10px] tracking-widest text-[#E5B842] uppercase">
                        Career Honors
                      </p>
                      <p className="font-serif-luxury text-sm font-semibold text-white mt-1">
                        {selectedArtist.honors}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Profile Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="font-cinzel text-xs font-semibold tracking-[0.25em] text-[#E5B842] uppercase">
                      Biographical Sketch
                    </span>
                    <h3 className="mt-1 font-serif-luxury text-3xl sm:text-4xl text-[#F8F5EE]">
                      {selectedArtist.name}
                    </h3>
                    <p className="font-serif-luxury text-lg italic text-[#F5D061] mt-1">
                      {selectedArtist.role}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="font-sans-clean text-sm sm:text-base text-[#C9BFB0] leading-relaxed">
                    {selectedArtist.bio}
                  </p>

                  {/* Specialties */}
                  <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/40 p-5">
                    <p className="font-cinzel text-xs font-bold tracking-wider text-[#E5B842] uppercase mb-3 flex items-center gap-2">
                      <Disc className="h-4 w-4" /> Specialties & Repertoire
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedArtist.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#ECE5D8]"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Performances */}
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="font-cinzel text-xs font-bold tracking-wider text-[#E5B842] uppercase mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4" /> Upcoming Linked Performances
                    </p>
                    <div className="space-y-2">
                      {selectedArtist.upcomingPerformances.map((perf, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg border border-white/5 bg-black/30 px-3 py-2 text-xs text-[#ECE5D8]"
                        >
                          <span>{perf}</span>
                          <span className="font-cinzel text-[10px] text-[#E5B842] uppercase tracking-wider">
                            Main Stage
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => onNavigate ? onNavigate('events') : (window.location.hash = '#events')}
                      className="btn-gold-primary group flex items-center gap-3 rounded-full px-8 py-3.5 text-xs font-bold tracking-[0.22em] uppercase"
                    >
                      <span>View Performances</span>
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>

                    <button
                      onClick={handleNextArtist}
                      className="group flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#16120D] px-7 py-3.5 text-xs font-semibold tracking-[0.2em] text-[#ECE5D8] uppercase transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 hover:text-white"
                    >
                      <span>Explore Other Artists</span>
                      <ArrowRight className="h-4 w-4 text-[#E5B842] transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 4 — JOIN THE MUSICAL COMMUNITY */}
      <section className="relative z-10 px-6 py-28 md:px-12 lg:px-20 overflow-hidden border-t border-[#D4AF37]/20">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/concert_hall_thumb.jpg"
            alt="Concert Hall"
            className="h-full w-full object-cover filter brightness-[0.22] contrast-[1.25]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/85 to-[#070605]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <RevealSection>
            <SectionBadge icon={Heart}>COLLECTIVE EXCELLENCE</SectionBadge>
            <h2 className="mt-4 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE] leading-tight">
              United by a <span className="italic gold-text-gradient">Love of Music</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans-clean text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              {artistsPageData.cta.description}
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => onNavigate ? onNavigate('events') : (window.location.hash = '#events')}
                className="btn-gold-primary group flex items-center gap-3 rounded-full px-9 py-4 text-xs font-bold tracking-[0.24em] uppercase shadow-[0_0_30px_rgba(229,184,66,0.35)]"
              >
                <span>{artistsPageData.cta.buttonText}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
