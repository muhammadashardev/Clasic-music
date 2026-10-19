import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Play,
  Film,
  Camera,
  Layers,
  ChevronRight,
  Maximize2,
  X,
  ArrowRight,
  Volume2,
  Calendar,
  Compass,
  Award,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import TrailerModal from '../components/TrailerModal';
import { galleryPageData } from '../data/mockData';

// Ambient Background Glow Component
function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[8%] left-[12%] h-[480px] w-[480px] rounded-full bg-[#E5B842]/[0.035] blur-[140px]" />
      <div className="absolute top-[40%] right-[8%] h-[550px] w-[550px] rounded-full bg-[#D4AF37]/[0.03] blur-[150px]" />
      <div className="absolute bottom-[12%] left-[18%] h-[500px] w-[500px] rounded-full bg-[#E5B842]/[0.035] blur-[140px]" />
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

export default function MediaGallery({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(galleryPageData.videoHighlights.featured);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [archiveModalOpen, setArchiveModalOpen] = useState(false);

  const filteredPhotos =
    activeCategory === 'All'
      ? galleryPageData.photos
      : galleryPageData.photos.filter((p) => p.category === activeCategory);

  const handlePlayVideo = (video) => {
    setActiveVideo(video);
    setVideoModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#070605] text-[#ECE5D8] selection:bg-[#E5B842]/30 selection:text-white">
      <AmbientOrbs />

      {/* Navigation */}
      <Navbar
        currentPage="gallery"
        onNavigate={onNavigate}
        onOpenBooking={() => setBookingOpen(true)}
      />

      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={galleryPageData.hero.bgImage}
            alt="Media Gallery Hero"
            className="h-full w-full object-cover object-center filter brightness-[0.34] contrast-[1.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070605] via-transparent to-[#070605]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#070605]/50 to-[#070605]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge icon={Film}>{galleryPageData.hero.badge}</SectionBadge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F8F5EE] leading-[1.08]"
          >
            Every Performance <span className="italic gold-text-gradient">Tells a Story</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl font-sans-clean text-base md:text-lg text-[#C9BFB0] leading-relaxed"
          >
            {galleryPageData.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => handlePlayVideo(galleryPageData.videoHighlights.featured)}
              className="btn-gold-primary group flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold tracking-[0.22em] uppercase transition-all duration-300 shadow-[0_0_30px_rgba(229,184,66,0.35)]"
            >
              <Play className="h-4 w-4 fill-black text-black transition-transform group-hover:scale-110" />
              <span>Watch Season Reel</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — PERFORMANCE PHOTOGRAPHY */}
      <section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <RevealSection className="text-center max-w-3xl mx-auto mb-14">
            <SectionBadge icon={Camera}>VISUAL ARCHIVE</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              Behind the <span className="italic gold-text-gradient">Music</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              Discover the energy of live performances, the concentration of rehearsals, and the artistry behind every concert.
            </p>
          </RevealSection>

          {/* Gallery Category Filter Tabs */}
          <RevealSection delay={0.1} className="mb-12 flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#120F0C]/80 p-2 backdrop-blur-md">
              {galleryPageData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#E5B842] text-black shadow-[0_0_15px_rgba(229,184,66,0.4)]'
                      : 'text-[#C9BFB0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealSection>

          {/* Masonry / Responsive Grid with AnimatePresence */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
                <motion.div
                  layout
                  key={photo.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#14100C] shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#E5B842] hover:shadow-[0_12px_35px_rgba(212,175,55,0.2)]"
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Top Category Badge */}
                  <span className="absolute top-3 left-3 rounded-full border border-white/20 bg-black/70 px-2.5 py-0.5 font-cinzel text-[9px] tracking-wider text-[#F5D061] backdrop-blur-sm uppercase">
                    {photo.category}
                  </span>

                  {/* Hover Information Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-cinzel text-[10px] tracking-widest text-[#E5B842] uppercase">
                      {photo.date}
                    </p>
                    <h3 className="font-serif-luxury text-lg font-bold text-white mt-0.5">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#C9BFB0] mt-1 line-clamp-1">{photo.caption}</p>
                    
                    <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-[#E5B842]">
                      <Maximize2 className="h-3 w-3" /> Click to enlarge
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 — VIDEO HIGHLIGHTS */}
      <section className="relative z-10 px-6 py-24 md:px-12 lg:px-20 bg-gradient-to-b from-[#0E0C09] via-[#14100C] to-[#0A0806] border-t border-b border-[#D4AF37]/20">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="text-center mb-14">
            <SectionBadge icon={Volume2}>CINEMATIC HIGHLIGHTS</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              Hear the Music. <span className="italic gold-text-gradient">Feel the Moment.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              Watch selected performances, artist interviews, and behind-the-scenes moments from our musical community.
            </p>
          </RevealSection>

          {/* Featured Video Showcase Card */}
          <RevealSection delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#1B150E] to-[#0A0806] p-6 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#D4AF37]/25 shadow-2xl group">
                <img
                  src={galleryPageData.videoHighlights.featured.thumbnail}
                  alt={galleryPageData.videoHighlights.featured.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Big Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(galleryPageData.videoHighlights.featured)}
                    className="group/btn relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-[#F5D061] bg-black/60 shadow-[0_0_35px_rgba(229,184,66,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#E5B842] active:scale-95"
                  >
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 fill-[#E5B842] text-[#E5B842] transition-colors group-hover/btn:fill-black group-hover/btn:text-black ml-1" />
                    <span className="absolute -inset-2 rounded-full border border-[#E5B842]/40 animate-ping" />
                  </button>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-[#E5B842] px-3 py-1 font-cinzel text-[10px] font-bold text-black uppercase tracking-wider mb-2">
                    Featured Performance · {galleryPageData.videoHighlights.featured.duration}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-4xl font-bold text-white">
                    {galleryPageData.videoHighlights.featured.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-xs sm:text-sm text-[#C9BFB0] leading-relaxed">
                    {galleryPageData.videoHighlights.featured.description}
                  </p>
                </div>
              </div>

              {/* YouTube CTA Button */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="font-serif-luxury text-lg text-[#F8F5EE]">
                    Official Symphony Broadcast Channel
                  </p>
                  <p className="text-xs text-[#A89F91]">
                    4K Ultra HD Audio Recording with Dolby Atmos Mix
                  </p>
                </div>

                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold-primary group flex items-center gap-3 rounded-full px-8 py-3.5 text-xs font-bold tracking-[0.22em] uppercase"
                >
                  <Play className="h-3.5 w-3.5 fill-black text-black" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          </RevealSection>

          {/* Additional Video Clips Strip */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {galleryPageData.videoHighlights.clips.map((clip, i) => (
              <RevealSection key={clip.id} delay={i * 0.12}>
                <div
                  onClick={() => handlePlayVideo(clip)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#120F0C] p-4 transition-all duration-300 hover:border-[#E5B842]/60 hover:-translate-y-1"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-3">
                    <img
                      src={clip.thumbnail}
                      alt={clip.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-[#E5B842] border border-[#D4AF37]/50 backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="h-4 w-4 fill-current ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[10px] text-white">
                      {clip.duration}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-base font-bold text-[#F8F5EE] group-hover:text-[#F5D061] transition-colors">
                    {clip.title}
                  </h4>
                  <p className="text-xs text-[#A89F91] mt-0.5">{clip.artist}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — PAST PERFORMANCE HIGHLIGHTS */}
      <section className="relative z-10 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <RevealSection className="text-center max-w-3xl mx-auto mb-16">
            <SectionBadge icon={Compass}>SEASON MEMORIES</SectionBadge>
            <h2 className="mt-3 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE]">
              A Season to <span className="italic gold-text-gradient">Remember</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              {galleryPageData.pastHighlights.description}
            </p>
          </RevealSection>

          {/* Stats Showcase */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {galleryPageData.pastHighlights.stats.map((s, idx) => (
              <RevealSection key={idx} delay={idx * 0.1}>
                <div className="rounded-2xl border border-[#D4AF37]/25 bg-gradient-to-b from-[#18140F] to-[#0E0C09] p-6 text-center">
                  <p className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#F5D061]">
                    {s.value}
                  </p>
                  <p className="mt-2 font-cinzel text-[11px] tracking-wider text-[#A89F91] uppercase">
                    {s.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection delay={0.2} className="text-center">
            <button
              onClick={() => setArchiveModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full border border-[#D4AF37]/40 bg-[#16120D] px-8 py-4 text-xs font-bold tracking-[0.22em] text-[#ECE5D8] uppercase transition-all duration-300 hover:border-[#F5D061] hover:bg-[#D4AF37]/15 hover:text-white hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
            >
              <span>{galleryPageData.pastHighlights.buttonText}</span>
              <ArrowRight className="h-4 w-4 text-[#E5B842] transition-transform group-hover:translate-x-1" />
            </button>
          </RevealSection>
        </div>
      </section>

      {/* SECTION 5 — GALLERY CTA */}
      <section className="relative z-10 px-6 py-28 md:px-12 lg:px-20 overflow-hidden border-t border-[#D4AF37]/20">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/strings_of_romance.jpg"
            alt="Strings Background"
            className="h-full w-full object-cover filter brightness-[0.24] contrast-[1.2]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/85 to-[#070605]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <RevealSection>
            <SectionBadge icon={Sparkles}>JOIN THE AUDIENCE</SectionBadge>
            <h2 className="mt-4 font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-[#F8F5EE] leading-tight">
              Make Your Next Memory <span className="italic gold-text-gradient">with Us</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-sans-clean text-base md:text-lg text-[#C9BFB0] leading-relaxed">
              {galleryPageData.cta.description}
            </p>

            <div className="mt-10 flex justify-center">
              <button
                onClick={() => onNavigate ? onNavigate('events') : (window.location.hash = '#events')}
                className="btn-gold-primary group flex items-center gap-3 rounded-full px-9 py-4 text-xs font-bold tracking-[0.24em] uppercase shadow-[0_0_30px_rgba(229,184,66,0.35)]"
              >
                <span>{galleryPageData.cta.buttonText}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-2xl"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#0C0A08] shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 rounded-full border border-white/20 bg-black/70 p-2.5 text-white/80 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 bg-[#120F0C]">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-[#E5B842]/20 border border-[#E5B842]/40 px-3 py-0.5 font-cinzel text-[10px] text-[#F5D061] uppercase tracking-wider">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-xs text-[#A89F91]">{selectedPhoto.date}</span>
                </div>
                <h3 className="font-serif-luxury text-2xl md:text-3xl font-bold text-white mt-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-[#C9BFB0] mt-2 leading-relaxed">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Trailer Modal */}
      <TrailerModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />

      {/* Archive Modal */}
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
                Concert Archive & Discography
              </h3>
              <p className="mt-2 text-sm text-[#C9BFB0]">
                Explore over 140 recorded performances, multi-track studio albums, and commemorative tour programs from 1988 to 2026.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex justify-between items-center">
                  <div>
                    <p className="font-serif-luxury text-lg font-bold text-white">The Golden Vienna Jubilee (Live)</p>
                    <p className="text-xs text-[#E5B842]">Gold Master Pressing · 1998</p>
                  </div>
                  <span className="text-xs text-[#A89F91]">Archived</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex justify-between items-center">
                  <div>
                    <p className="font-serif-luxury text-lg font-bold text-white">Brahms: The Complete Symphonies</p>
                    <p className="text-xs text-[#E5B842]">Deutsche Grammophon · 2012</p>
                  </div>
                  <span className="text-xs text-[#A89F91]">Archived</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 flex justify-between items-center">
                  <div>
                    <p className="font-serif-luxury text-lg font-bold text-white">Ode to Light: Festival Finale</p>
                    <p className="text-xs text-[#E5B842]">Orchestral Master · 2025</p>
                  </div>
                  <span className="text-xs text-[#A89F91]">Archived</span>
                </div>
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
