import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Compass, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { performancesSectionData } from '../data/mockData';

export default function UpcomingPerformances({ onSelectPerformance, onViewAll }) {
  const [startIndex, setStartIndex] = useState(0);
  const total = performancesSectionData.performances.length;
  // Display 3 visible cards in carousel window
  const visibleCardsCount = 3;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? total - visibleCardsCount : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= total - visibleCardsCount ? 0 : prev + 1));
  };

  // Get currently visible performances (window of 3)
  const visiblePerformances = performancesSectionData.performances.slice(
    startIndex,
    startIndex + visibleCardsCount
  );

  return (
    <section
      id="events"
      className="relative w-full overflow-hidden bg-[#070605] text-[#F4EFE6] py-20 md:py-28 lg:py-32 border-t border-[#D4AF37]/15"
    >
      {/* Upper-Right Ambient Violinist Silhouette Artwork (Matching Mockup) */}
      <div className="pointer-events-none absolute top-0 right-0 h-[480px] w-full max-w-[700px] overflow-hidden opacity-100 select-none">
        <img
          src="/violinist-raw.jpg"
          alt="Violinist backdrop"
          className="h-full w-full object-cover object-top filter brightness-120 "
        />
        {/* Gradients to seamlessly blend into deep black background */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#070605]/80 to-[#070605]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-[#070605]/60 to-transparent" />
      </div>

      {/* Ambient warm radial glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] rounded-full bg-[#E5B842]/5 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col text-left max-w-2xl">
          
          {/* Top Delicate Gold Loop Flourish */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 flex items-center select-none"
          >
            <svg viewBox="0 0 40 16" fill="none" className="h-4 w-10 text-[#D4AF37]">
              <path
                d="M20 2C16 7 12 7 4 3C8 9 12 11 20 12C28 11 32 9 36 3C28 7 24 7 20 2Z"
                fill="currentColor"
              />
              <circle cx="20" cy="10" r="1.2" fill="#F5D061" />
            </svg>
          </motion.div>

          {/* Eyebrow with flanking right line */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-4 select-none"
          >
            <span className="font-cinzel text-xs font-semibold tracking-[0.32em] text-[#D4AF37] uppercase">
              {performancesSectionData.eyebrow}
            </span>
            <div className="h-[1px] w-24 bg-gradient-to-r from-[#D4AF37]/60 to-transparent" />
          </motion.div>

          {/* Big Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-3 flex flex-col font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[54px] font-normal leading-[1.1] text-[#F7F4EE] select-none"
          >
            <span className="text-[#FCFAF7] drop-shadow-sm">
              {performancesSectionData.titleLine1}
            </span>
            <span className="gold-text-gradient italic pr-2 drop-shadow-sm">
              {performancesSectionData.titleLine2}
            </span>
          </motion.h2>

          {/* Decorative Golden Horizontal Filigree Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 flex items-center gap-2 select-none"
          >
            <div className="h-[1px] w-16 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
            <div className="flex items-center gap-1">
              <div className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
              <svg viewBox="0 0 20 10" fill="none" className="h-2.5 w-5 text-[#E5B842]">
                <path
                  d="M2 5C5 2 7 2 10 5C13 8 15 8 18 5M10 2C8 5 8 5 10 8C12 5 12 5 10 2"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
              <div className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-[#D4AF37]/80 to-transparent" />
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 max-w-xl font-sans-clean text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed text-[#CBC2B2] text-pretty"
          >
            {performancesSectionData.subtitle}
          </motion.p>
        </div>

        {/* ================= CAROUSEL AREA WITH FLANKING CIRCULAR ARROWS ================= */}
        <div className="relative mt-12 sm:mt-16 flex items-center">
          
          {/* Far Left Circular Prev Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous performances"
            className="hidden xl:flex absolute -left-16 z-20 h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0C0A08]/85 text-[#F5D061] backdrop-blur-md transition-all duration-300 hover:border-[#FFF1BE] hover:bg-[#D4AF37]/20 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Cards Grid / Carousel */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            <AnimatePresence mode="popLayout">
              {visiblePerformances.map((perf, idx) => (
                <motion.div
                  key={perf.id}
                  layout
                  initial={{ opacity: 0, y: 25, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -25, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => onSelectPerformance(perf)}
                  className="glass-gold-card group relative flex flex-col justify-between rounded-2xl md:rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:border-[#E5B842]/60 hover:-translate-y-2 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                >
                  <div>
                    {/* Top Header of Card: Number + Rule + Infinity Filigree (Matching Mockup) */}
                    <div className="flex items-center justify-between gap-3 mb-4 select-none">
                      <span className="font-serif-luxury text-xl font-bold text-[#E5B842] tracking-wider">
                        {perf.number}
                      </span>
                      <div className="h-[1px] flex-1 bg-white/15" />
                      {/* Gold Infinity Loop Ornament */}
                      <svg
                        viewBox="0 0 24 12"
                        fill="none"
                        className="h-3 w-6 text-[#D4AF37]/80 group-hover:text-[#F5D061] transition-colors"
                      >
                        <path
                          d="M6 3C3 3 1 6 1 6C1 6 3 9 6 9C9 9 10.5 7 12 6C13.5 5 15 3 18 3C21 3 23 6 23 6C23 6 21 9 18 9C15 9 13.5 7 12 6C10.5 5 9 3 6 3Z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    {/* Card Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-lg">
                      <img
                        src={perf.image}
                        alt={perf.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106 filter brightness-95 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Subtle hover badge */}
                      <div className="absolute bottom-2.5 right-2.5 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-[#F5D061] border border-[#D4AF37]/30">
                        {perf.price}
                      </div>
                    </div>

                    {/* Concert Title */}
                    <h3 className="font-serif-luxury mt-5 text-2xl font-normal text-[#F7F4EE] group-hover:text-white transition-colors tracking-wide">
                      {perf.title}
                    </h3>

                    {/* Performance Metadata List */}
                    <div className="mt-4 space-y-2.5 text-xs text-[#CBC2B2]">
                      {/* Date */}
                      <div className="flex items-start gap-2.5">
                        <Calendar className="h-4 w-4 shrink-0 text-[#E5B842] mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#D4AF37] mr-1.5">Date:</span>
                          <span>{perf.date}</span>
                        </div>
                      </div>

                      {/* Venue */}
                      <div className="flex items-start gap-2.5">
                        <MapPin className="h-4 w-4 shrink-0 text-[#E5B842] mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#D4AF37] mr-1.5">Venue:</span>
                          <span>{perf.venue}</span>
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="flex items-start gap-2.5">
                        <Compass className="h-4 w-4 shrink-0 text-[#E5B842] mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#D4AF37] mr-1.5">Experience:</span>
                          <span className="text-white/80">{perf.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest text-[#E5B842] uppercase font-cinzel font-semibold group-hover:underline">
                      Reserve Seats →
                    </span>
                    <span className="text-[10px] text-white/40 tracking-wider">
                      {perf.conductor}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Far Right Circular Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next performances"
            className="hidden xl:flex absolute -right-16 z-20 h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0C0A08]/85 text-[#F5D061] backdrop-blur-md transition-all duration-300 hover:border-[#FFF1BE] hover:bg-[#D4AF37]/20 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile carousel navigation controls */}
        <div className="flex xl:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="h-11 w-11 rounded-full border border-[#D4AF37]/50 bg-black/60 text-[#F5D061] flex items-center justify-center"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-xs font-mono text-[#D4AF37]">
            {String(startIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <button
            onClick={handleNext}
            className="h-11 w-11 rounded-full border border-[#D4AF37]/50 bg-black/60 text-[#F5D061] flex items-center justify-center"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* ================= BOTTOM CTA: VIEW ALL CONCERTS FLANKED BY FILIGREE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 sm:mt-20 flex items-center justify-center gap-4 sm:gap-6 select-none"
        >
          {/* Left Decorative Flank Line */}
          <div className="hidden sm:flex items-center gap-3 flex-1 max-w-[280px]">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
            <svg viewBox="0 0 20 12" fill="none" className="h-3 w-5 text-[#E5B842]">
              <path
                d="M2 6C5 3 7 3 10 6C13 9 15 9 18 6M10 2C8 6 8 6 10 10C12 6 12 6 10 2"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Centered Button: VIEW ALL CONCERTS */}
          <button
            onClick={onViewAll}
            className="btn-gold-primary rounded-full px-8 sm:px-12 py-3.5 sm:py-4 text-xs sm:text-sm font-bold tracking-[0.24em] uppercase text-[#120e06] shadow-[0_0_35px_rgba(229,184,66,0.35)] hover:shadow-[0_0_50px_rgba(229,184,66,0.55)] transition-all duration-300 active:scale-95"
          >
            View All Concerts
          </button>

          {/* Right Decorative Flank Line */}
          <div className="hidden sm:flex items-center gap-3 flex-1 max-w-[280px]">
            <svg viewBox="0 0 20 12" fill="none" className="h-3 w-5 text-[#E5B842]">
              <path
                d="M2 6C5 3 7 3 10 6C13 9 15 9 18 6M10 2C8 6 8 6 10 10C12 6 12 6 10 2"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
          </div>
        </motion.div>

      

      </div>
    </section>
  );
}
