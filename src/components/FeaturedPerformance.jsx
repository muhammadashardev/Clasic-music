import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Sparkles, Volume2 } from 'lucide-react';
import { featuredPerformanceData } from '../data/mockData';

export default function FeaturedPerformance({ onWatchPerformances, onOpenGallery }) {
  const [activeCardId, setActiveCardId] = useState('g1');
  const activeCard =
    featuredPerformanceData.galleryCards.find((c) => c.id === activeCardId) ||
    featuredPerformanceData.galleryCards[0];

  return (
    <section
      id="featured"
      className="relative w-full overflow-hidden bg-[#070605] text-[#F4EFE6] py-20 md:py-28 lg:py-32 border-t border-[#D4AF37]/15"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[550px] w-[550px] rounded-full bg-[#E5B842]/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
        
        {/* ================= UPPER SECTION: Left Content & Right Fluid Conductor Portal ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Eyebrow, Big Headline, Paragraphs, CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col text-left">
            
            {/* Eyebrow with left rule (Matching Mockup) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3.5 select-none"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
              <span className="font-cinzel text-xs font-semibold tracking-[0.32em] text-[#D4AF37] uppercase">
                {featuredPerformanceData.eyebrow}
              </span>
            </motion.div>

            {/* Big Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-3.5 flex flex-col font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px] font-normal leading-[1.08] text-[#F7F4EE] select-none"
            >
              <span className="drop-shadow-sm uppercase tracking-wide">
                {featuredPerformanceData.titleLine1}
              </span>
              <span className="gold-text-gradient font-serif-luxury italic font-normal tracking-wide pr-2 drop-shadow-[0_4px_20px_rgba(229,184,66,0.25)]">
                {featuredPerformanceData.titleLine2}
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 font-serif-luxury text-xl sm:text-2xl font-normal text-[#EAE2D5] tracking-wide"
            >
              {featuredPerformanceData.subtitle}
            </motion.h3>

            {/* Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-4 space-y-3 font-sans-clean text-xs sm:text-sm font-normal leading-relaxed text-[#CBC2B2] max-w-lg"
            >
              {featuredPerformanceData.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              {/* Watch Performances Button */}
              <button
                onClick={onWatchPerformances}
                className="btn-gold-primary group flex items-center gap-2.5 rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all duration-300"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#F5D061]">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" />
                </div>
                <span>Watch Performances</span>
              </button>

              {/* Explore Our Gallery Button */}
              <button
                onClick={onOpenGallery}
                className="group flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-7 py-3.5 text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#F4EFE6] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#E5B842] hover:bg-[#E5B842]/10 hover:text-white hover:shadow-[0_0_20px_rgba(229,184,66,0.2)] active:scale-95"
              >
                <span>Explore Our Gallery</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#E5B842]" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Fluid Organic Conductor Portal Frame with Glowing Golden Rim */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center">
            
            {/* The Main Organic Curved Portal (Matching the mockup's cello/violin teardrop fluid frame) */}
            <div className="relative w-full max-w-[680px] flex items-center">
              
              {/* Golden Luminous Aura Contour */}
              <div className="absolute -inset-1 rounded-[50px_180px_40px_160px] bg-gradient-to-tr from-[#E5B842]/40 via-[#F5D061]/20 to-transparent blur-md pointer-events-none" />

              {/* Fluid Framed Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="group relative w-full aspect-[16/10] sm:aspect-[1.65/1] overflow-hidden rounded-[40px_160px_35px_140px] border border-[#E5B842]/60 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-black"
              >
                {/* Active Showcase Image (Crossfades when clicking bottom cards) */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCard.image}
                    src={activeCard.image}
                    alt={activeCard.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.08] transition-transform duration-1000 group-hover:scale-104"
                  />
                </AnimatePresence>

                {/* Dark Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

                {/* Center Floating Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={onWatchPerformances}
                    aria-label="Play performance trailer"
                    className="group/btn relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#E5B842] bg-black/60 backdrop-blur-md shadow-[0_0_35px_rgba(229,184,66,0.45)] transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 rounded-full border border-[#E5B842]/40 animate-ping opacity-35" />
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 fill-[#F5D061] text-[#F5D061] ml-1 transition-transform duration-300 group-hover/btn:scale-110" />
                  </button>
                </div>

                {/* Active Performance Caption in bottom corner */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between text-xs text-white/90">
                  <div>
                    <span className="font-cinzel text-[10px] font-bold text-[#E5B842] tracking-widest uppercase block">
                      {activeCard.category}
                    </span>
                    <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#F7F4EE]">
                      {activeCard.title}
                    </span>
                  </div>

                  <span className="hidden sm:inline-block rounded-full bg-black/70 px-3 py-1 text-[10px] font-mono text-[#F5D061] border border-[#D4AF37]/40">
                    Live Acoustic Hall
                  </span>
                </div>
              </motion.div>

              {/* Secondary Right Arched Sliver / Peek Portal (Matching Mockup) */}
              <div className="hidden sm:block absolute -right-6 top-1/2 -translate-y-1/2 h-[75%] w-14 overflow-hidden rounded-[0_60px_60px_0] border-y border-r border-[#D4AF37]/40 shadow-2xl opacity-80">
                <img
                  src="/violinist-raw.jpg"
                  alt="String solo view"
                  className="h-full w-full object-cover object-left filter brightness-70"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM 4-CARD GALLERY STRIP ================= */}
        <div className="mt-14 sm:mt-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPerformanceData.galleryCards.map((card, idx) => {
              const isActive = activeCardId === card.id;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  onClick={() => setActiveCardId(card.id)}
                  className={`glass-gold-card group relative flex flex-col justify-between rounded-2xl p-4 sm:p-5 transition-all duration-500 cursor-pointer shadow-xl ${
                    isActive
                      ? 'border-[#E5B842] bg-[#16120D]/90 shadow-[0_0_30px_rgba(229,184,66,0.3)] -translate-y-1.5'
                      : 'hover:border-[#E5B842]/50 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Thumbnail Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-black/60 shadow-md">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="h-full w-full object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-106 group-hover:brightness-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                      {isActive && (
                        <div className="absolute top-2 right-2 rounded-full bg-[#E5B842] p-1 shadow-md">
                          <Sparkles className="h-2.5 w-2.5 text-black" />
                        </div>
                      )}
                    </div>

                    {/* Category Label */}
                    <span className="font-cinzel mt-4 text-[10px] font-bold tracking-[0.24em] text-[#D4AF37] uppercase block">
                      {card.category}
                    </span>

                    {/* Title */}
                    <h4 className="font-serif-luxury mt-1 text-lg sm:text-xl font-normal text-[#F7F4EE] group-hover:text-white transition-colors">
                      {card.title}
                    </h4>

                    {/* Instrument Note */}
                    <p className="mt-1.5 text-[11px] text-[#AFA595] line-clamp-1">
                      {card.desc}
                    </p>
                  </div>

                  {/* Arrow Link on Right */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-white/50 tracking-wider">
                      {card.pieces.split(',')[0]}
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        isActive
                          ? 'text-[#F5D061] translate-x-1'
                          : 'text-white/40 group-hover:text-[#E5B842] group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
