import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { legacySectionData } from '../data/mockData';

export default function MusicalLegacy({ onExploreMore }) {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = legacySectionData.pillars[activePillarIndex];

  const handleNextPillar = () => {
    setActivePillarIndex((prev) => (prev + 1) % legacySectionData.pillars.length);
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#070605] text-[#F4EFE6] py-20 md:py-28 lg:py-32 border-t border-[#D4AF37]/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#E5B842]/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16 xl:gap-20">
          
          {/* ================= LEFT COLUMN: Text, Mission, Pillars & Slider ================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col text-left">
            
            {/* Top Ornamental Classical Leaf Flourish */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-3 flex items-center select-none"
            >
              <svg
                viewBox="0 0 64 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-16 text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
              >
                <path
                  d="M32 3C32 3 34 8 40 8C46 8 50 4 52 2C50 6 48 11 40 12C35 12.6 32 17 32 21C32 17 29 12.6 24 12C16 11 14 6 12 2C14 4 18 8 24 8C30 8 32 3 32 3Z"
                  fill="currentColor"
                />
                <circle cx="32" cy="18" r="1.5" fill="#F5D061" />
              </svg>
            </motion.div>

            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-cinzel text-xs font-semibold tracking-[0.32em] text-[#D4AF37] uppercase select-none"
            >
              {legacySectionData.eyebrow}
            </motion.div>

            {/* Big Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-3 flex flex-col font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-[52px] xl:text-[58px] font-normal leading-[1.12] text-[#F7F4EE] select-none"
            >
              <span className="drop-shadow-sm">{legacySectionData.titleLine1}</span>
              <span className="drop-shadow-sm text-[#F0EAE1]">{legacySectionData.titleLine2}</span>
            </motion.h2>

            {/* Decorative Golden Horizontal Divider Flourish */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 flex items-center gap-2 select-none"
            >
              <div className="h-[1px] w-20 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
              <div className="flex items-center gap-1.5">
                <div className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
                {/* Filigree center loop */}
                <svg viewBox="0 0 24 12" fill="none" className="h-3 w-6 text-[#E5B842]">
                  <path
                    d="M2 6C6 2 8 2 12 6C16 10 18 10 22 6M12 2C10 6 10 6 12 10C14 6 14 6 12 2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="h-1 w-1 rotate-45 bg-[#D4AF37]" />
              </div>
              <div className="h-[1px] w-20 bg-gradient-to-l from-[#D4AF37]/80 to-transparent" />
            </motion.div>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 max-w-xl font-sans-clean text-xs sm:text-sm md:text-[15px] font-normal leading-relaxed text-[#CBC2B2] text-pretty"
            >
              {legacySectionData.paragraph}
            </motion.p>

            {/* Mission Statement Callout */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 border-l-2 border-[#D4AF37] pl-4 sm:pl-5 py-1.5"
            >
              <p className="font-serif-luxury text-base sm:text-lg italic text-[#F3CE66] leading-snug">
                {legacySectionData.mission}
              </p>
            </motion.div>

            {/* Three Pillars: Heritage, Artistry, Community */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 border-y border-white/10 py-6"
            >
              {/* Pillar 1: HERITAGE */}
              <div
                onClick={() => setActivePillarIndex(0)}
                className={`flex-1 flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer transition-all duration-300 p-2 rounded-xl ${
                  activePillarIndex === 0
                    ? 'text-[#F5D061] scale-105'
                    : 'text-[#AFA495] hover:text-[#E8DFC8]'
                }`}
              >
                {/* Classical Pantheon / Temple Colonnade Icon */}
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-7 w-7 text-[#E5B842] drop-shadow-[0_0_8px_rgba(229,184,66,0.4)]"
                  >
                    {/* Pediment Roof */}
                    <path d="M2 9L12 3L22 9V10H2V9Z" strokeLinejoin="round" />
                    {/* Columns */}
                    <path d="M5 10V19M9 10V19M15 10V19M19 10V19" strokeLinecap="round" />
                    {/* Base */}
                    <path d="M2 19H22V21H2V19Z" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-cinzel text-xs font-bold tracking-[0.24em] uppercase">
                  Heritage
                </span>
                <span className="text-[10px] text-white/50 tracking-wider mt-0.5 hidden sm:block">
                  Est. 1892
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-12 w-[1px] bg-white/15" />

              {/* Pillar 2: ARTISTRY */}
              <div
                onClick={() => setActivePillarIndex(1)}
                className={`flex-1 flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer transition-all duration-300 p-2 rounded-xl ${
                  activePillarIndex === 1
                    ? 'text-[#F5D061] scale-105'
                    : 'text-[#AFA495] hover:text-[#E8DFC8]'
                }`}
              >
                {/* Classical Lyre / Harp Icon */}
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-7 w-7 text-[#E5B842] drop-shadow-[0_0_8px_rgba(229,184,66,0.4)]"
                  >
                    {/* Lyre frame */}
                    <path d="M6 3C6 9 7 17 12 17C17 17 18 9 18 3" strokeLinecap="round" />
                    <path d="M4 4H8M16 4H20" strokeLinecap="round" />
                    {/* Lyre Strings */}
                    <line x1="9.5" y1="5" x2="9.5" y2="16" strokeLinecap="round" strokeWidth="1.2" />
                    <line x1="12" y1="5" x2="12" y2="16.5" strokeLinecap="round" strokeWidth="1.2" />
                    <line x1="14.5" y1="5" x2="14.5" y2="16" strokeLinecap="round" strokeWidth="1.2" />
                    {/* Base stand */}
                    <path d="M12 17V21M8 21H16" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-cinzel text-xs font-bold tracking-[0.24em] uppercase">
                  Artistry
                </span>
                <span className="text-[10px] text-white/50 tracking-wider mt-0.5 hidden sm:block">
                  110 Virtuosos
                </span>
              </div>

              {/* Divider */}
              <div className="hidden sm:block h-12 w-[1px] bg-white/15" />

              {/* Pillar 3: COMMUNITY */}
              <div
                onClick={() => setActivePillarIndex(2)}
                className={`flex-1 flex flex-col items-center sm:items-start text-center sm:text-left cursor-pointer transition-all duration-300 p-2 rounded-xl ${
                  activePillarIndex === 2
                    ? 'text-[#F5D061] scale-105'
                    : 'text-[#AFA495] hover:text-[#E8DFC8]'
                }`}
              >
                {/* Community / Audience Unity Icon */}
                <div className="mb-2.5 flex h-9 w-9 items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-7 w-7 text-[#E5B842] drop-shadow-[0_0_8px_rgba(229,184,66,0.4)]"
                  >
                    <path d="M16 21V19C16 17.3431 14.6569 16 13 16H7C5.34315 16 4 17.3431 4 19V21" />
                    <circle cx="10" cy="9" r="4" />
                    <path d="M20 21V19C19.9982 17.6148 19.0687 16.3986 17.75 16.03" />
                    <path d="M14.5 5.2C15.9 5.6 16.8 6.9 16.8 8.4C16.8 9.9 15.9 11.2 14.5 11.6" />
                  </svg>
                </div>
                <span className="font-cinzel text-xs font-bold tracking-[0.24em] uppercase">
                  Community
                </span>
                <span className="text-[10px] text-white/50 tracking-wider mt-0.5 hidden sm:block">
                  65k+ Listeners
                </span>
              </div>
            </motion.div>

            {/* Active Pillar Detail Box with Smooth Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-4 rounded-xl border border-[#D4AF37]/20 bg-[#120F0B]/60 p-4 backdrop-blur-md"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-cinzel text-xs sm:text-sm font-bold text-[#F5EEDC]">
                    {activePillar.title}
                  </h4>
                  <span className="font-mono text-[10px] font-semibold text-[#E5B842] tracking-wider uppercase">
                    {activePillar.highlight}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#CBC2B2] leading-relaxed">
                  {activePillar.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Track & Circular Arrow Button */}
            <div className="mt-8 flex items-center justify-between gap-6">
              
              {/* Golden Progress Track Line with Dots */}
              <div className="relative flex-1 flex items-center">
                {/* Start dot */}
                <div className="h-2 w-2 rounded-full bg-[#E5B842] shadow-[0_0_6px_#E5B842]" />
                
                {/* Horizontal track line */}
                <div className="relative h-[1.5px] flex-1 bg-white/20 mx-1 overflow-hidden">
                  <motion.div
                    className="absolute top-0 h-full bg-gradient-to-r from-[#DFAB42] to-[#FFF1BE] shadow-[0_0_8px_#E5B842]"
                    animate={{
                      width: `${((activePillarIndex + 1) / legacySectionData.pillars.length) * 100}%`,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Center marker dot */}
                <div className={`h-1.5 w-1.5 rounded-full transition-colors ${activePillarIndex >= 1 ? 'bg-[#E5B842]' : 'bg-white/40'}`} />

                <div className="relative h-[1.5px] flex-1 bg-white/20 mx-1 overflow-hidden">
                  <motion.div
                    className="absolute top-0 h-full bg-gradient-to-r from-[#DFAB42] to-[#FFF1BE]"
                    animate={{
                      width: activePillarIndex === 2 ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* End dot */}
                <div className={`h-2 w-2 rounded-full transition-colors ${activePillarIndex === 2 ? 'bg-[#E5B842] shadow-[0_0_6px_#E5B842]' : 'bg-white/40'}`} />
              </div>

              {/* Circular Next Arrow Button */}
              <button
                onClick={handleNextPillar}
                aria-label="Next pillar"
                className="group relative flex h-13 w-13 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-black/40 backdrop-blur-md transition-all duration-300 hover:border-[#FFF1BE] hover:bg-[#D4AF37]/20 hover:scale-105 active:scale-95 shadow-[0_0_18px_rgba(212,175,55,0.2)]"
              >
                <ArrowRight className="h-5 w-5 text-[#F5D061] transition-transform duration-300 group-hover:translate-x-0.5" />
                <div className="absolute inset-0 rounded-full border border-[#E5B842]/20 animate-ping opacity-25 pointer-events-none" />
              </button>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: Framed Violinist & Concentric Arcs ================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            
            {/* Concentric Golden Orbital Soundwave Arcs (Matching mockup) */}
            <div className="pointer-events-none absolute -inset-6 sm:-inset-10 flex items-center justify-center">
              {/* Outer Orbit Arc */}
              <div className="h-[460px] w-[460px] sm:h-[580px] sm:w-[580px] rounded-full border border-[#D4AF37]/20 border-dashed animate-[spin_120s_linear_infinite]" />
              
              {/* Middle Orbit Arc with golden gradient border */}
              <div className="absolute h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] rounded-full border border-[#E5B842]/30 shadow-[0_0_30px_rgba(229,184,66,0.1)]" />

              {/* Inner Orbit Arc */}
              <div className="absolute h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] rounded-full border border-[#D4AF37]/25" />

              {/* Radiating soundwave frequency lines from the violin body */}
              <svg
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[-40px] top-1/4 h-56 w-56 text-[#E5B842]/40 opacity-75"
              >
                <path
                  d="M10 150 Q 80 120 150 150 T 290 150"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="2 4"
                />
                <path
                  d="M20 130 Q 90 90 160 130 T 280 130"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M15 170 Q 85 200 155 170 T 285 170"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle cx="150" cy="150" r="3" fill="#F5D061" />
              </svg>
            </div>

            {/* Portal Container Framing the Raw Violinist Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="group relative z-10 w-full max-w-[540px] aspect-[4/3] sm:aspect-[1.15/1] overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-black/60 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
            >
              {/* The Raw Violinist Image Provided by User */}
              <img
                src="/violinist-raw.jpg"
                alt="First Violinist performing at The Grand Symphony"
                className="h-full w-full object-cover object-center filter brightness-[0.92] contrast-[1.08] transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Atmospheric Vignette Overlays inside the frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070605]/60 via-transparent to-transparent" />

              {/* Subtle Golden Sheen on Hover */}
              <div className="absolute inset-0 bg-[#E5B842]/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100 pointer-events-none" />
            </motion.div>

            {/* Circular Medallion / Stamp: "EST. IN MUSICAL EXCELLENCE" (Matching Mockup) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -bottom-6 left-4 sm:-bottom-8 sm:left-6 z-20 flex h-28 w-28 sm:h-32 sm:w-32 flex-col items-center justify-center rounded-full border border-[#D4AF37] bg-[#0E0B08]/92 p-3 text-center backdrop-blur-xl shadow-[0_0_35px_rgba(212,175,55,0.35)] select-none hover:border-[#FFF1BE] hover:shadow-[0_0_45px_rgba(212,175,55,0.55)] transition-all duration-300"
            >
              {/* Delicate Gold Leaf Flourish */}
              <div className="mb-0.5 text-[#E5B842]">
                <svg viewBox="0 0 24 10" fill="none" className="h-3 w-6">
                  <path
                    d="M12 2C10 5 8 5 4 2C7 6 9 8 12 9C15 8 17 6 20 2C16 5 14 5 12 2Z"
                    fill="currentColor"
                  />
                  <circle cx="12" cy="7" r="1" fill="#FFF1BE" />
                </svg>
              </div>

              {/* Stamp Typography */}
              <span className="font-cinzel text-[10px] sm:text-[11px] font-bold text-[#E5B842] tracking-[0.26em] uppercase">
                {legacySectionData.badge.est}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[10px] font-semibold text-[#F7F3E9] tracking-[0.24em] uppercase mt-0.5">
                {legacySectionData.badge.line1}
              </span>
              <span className="font-cinzel text-[9px] sm:text-[10px] font-semibold text-[#F7F3E9] tracking-[0.24em] uppercase">
                {legacySectionData.badge.line2}
              </span>

              {/* Delicate Inner Ring */}
              <div className="pointer-events-none absolute inset-1.5 rounded-full border border-[#D4AF37]/30" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
