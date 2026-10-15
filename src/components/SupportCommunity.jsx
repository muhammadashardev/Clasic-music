import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Users,
  GraduationCap,
  Music,
  ArrowRight,
  Play,
  Sparkles,
} from 'lucide-react';
import { supportCommunityData } from '../data/mockData';

export default function SupportCommunity({ onSupportMission, onWatchImpact }) {
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const getIcon = (type) => {
    switch (type) {
      case 'scholarship':
        return <GraduationCap className="h-6 w-6 text-[#E5B842]" />;
      case 'workshops':
        return <Music className="h-6 w-6 text-[#E5B842]" />;
      case 'outreach':
        return <Users className="h-6 w-6 text-[#E5B842]" />;
      case 'preservation':
      default:
        return <Heart className="h-6 w-6 text-[#E5B842]" />;
    }
  };

  return (
    <section
      id="community"
      className="relative w-full overflow-hidden bg-[#070605] text-[#F4EFE6] py-20 md:py-28 lg:py-32 border-t border-[#D4AF37]/15"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-[#E5B842]/8 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[450px] w-[450px] rounded-full bg-[#D4AF37]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
        
        {/* ================= UPPER SECTION: Left Content & Right Sweeping Violinist Canvas ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14 xl:gap-16">
          
          {/* Left Column: Eyebrow, Big Headline, Subtitle, Narrative, CTAs */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col text-left">
            
            {/* Eyebrow with diamond ornament (Matching Mockup) */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-2.5 select-none"
            >
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#D4AF37]" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#E5B842]" />
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              <span className="font-cinzel text-xs font-semibold tracking-[0.32em] text-[#D4AF37] uppercase ml-1">
                {supportCommunityData.eyebrow}
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
                {supportCommunityData.titleLine1}
              </span>
              <span className="gold-text-gradient font-serif-luxury italic font-normal tracking-wide pr-2 drop-shadow-[0_4px_20px_rgba(229,184,66,0.25)]">
                {supportCommunityData.titleLine2}
              </span>
            </motion.h2>

            {/* Decorative Golden Filigree Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-4 flex items-center gap-2 select-none"
            >
              <div className="h-[1px] w-14 bg-gradient-to-r from-[#D4AF37]/80 to-transparent" />
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
              <div className="h-[1px] w-14 bg-gradient-to-l from-[#D4AF37]/80 to-transparent" />
            </motion.div>

            {/* Subtitle */}
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="mt-4 font-serif-luxury text-xl sm:text-2xl font-normal text-[#EAE2D5] leading-tight"
            >
              {supportCommunityData.subtitle}
            </motion.h3>

            {/* Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-4 space-y-3 font-sans-clean text-xs sm:text-sm font-normal leading-relaxed text-[#CBC2B2] max-w-lg"
            >
              {supportCommunityData.paragraphs.map((p, idx) => (
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
              {/* Support Our Mission Button */}
              <button
                onClick={() => onSupportMission(null)}
                className="btn-gold-primary group flex items-center gap-2.5 rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all duration-300"
              >
                <Heart className="h-4 w-4 fill-current text-[#120E06]" />
                <span>Support Our Mission</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Become A Sponsor Button */}
              <button
                onClick={() => onSupportMission({ title: 'Corporate & Patron Sponsorship' })}
                className="group flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-7 py-3.5 text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#F4EFE6] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#E5B842] hover:bg-[#E5B842]/10 hover:text-white hover:shadow-[0_0_20px_rgba(229,184,66,0.2)] active:scale-95"
              >
                <Users className="h-4 w-4 text-[#E5B842]" />
                <span>Become A Sponsor</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 text-[#E5B842]" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Sweeping Golden Ribbon Silhouette with Violinist Photo & Impact Badges */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center">
            
            {/* The Sweeping Golden Ribbon Shape framing the Violinist */}
            <div className="relative w-full max-w-[680px]">
              
              {/* Glowing Golden Wave Arc Trim */}
              <div className="absolute -inset-2 rounded-[60px_40px_160px_60px] bg-gradient-to-tr from-[#E5B842]/30 via-transparent to-[#F5D061]/25 blur-lg pointer-events-none" />

              {/* Main Image Portal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="group relative w-full aspect-[16/11] sm:aspect-[1.55/1] overflow-hidden rounded-[50px_35px_140px_50px] border border-[#E5B842]/50 shadow-[0_25px_60px_rgba(0,0,0,0.95)] bg-black"
              >
                {/* Violinist Photo */}
                <img
                  src="/violinist-raw.jpg"
                  alt="Young classical violinist performing"
                  className="h-full w-full object-cover object-top filter brightness-[0.92] contrast-[1.08] transition-transform duration-1000 group-hover:scale-104"
                />

                {/* Atmospheric Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

                {/* Floating "WATCH OUR IMPACT" Circular Play Button */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/4 flex items-center gap-3.5">
                  <button
                    onClick={onWatchImpact}
                    aria-label="Watch our impact video"
                    className="group/btn relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full border border-[#E5B842] bg-black/65 backdrop-blur-md shadow-[0_0_30px_rgba(229,184,66,0.45)] transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <div className="absolute inset-0 rounded-full border border-[#E5B842]/40 animate-ping opacity-35" />
                    <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-[#F5D061] text-[#F5D061] ml-0.5 transition-transform duration-300 group-hover/btn:scale-110" />
                  </button>

                  <div className="flex flex-col font-cinzel text-left tracking-[0.24em] select-none">
                    <span className="text-[10px] font-semibold text-white/90 uppercase">
                      Watch
                    </span>
                    <span className="text-[11px] font-bold text-[#E5B842] uppercase drop-shadow-[0_0_6px_rgba(229,184,66,0.5)]">
                      Our Impact
                    </span>
                  </div>
                </div>

                {/* Floating Community Social Proof Card (Matching Mockup) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onClick={() => onSupportMission(null)}
                  className="glass-gold-card absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-4 rounded-2xl p-3.5 sm:p-4 backdrop-blur-xl border border-[#D4AF37]/40 shadow-2xl cursor-pointer hover:border-[#F5D061] transition-all hover:scale-102"
                >
                  <div className="flex flex-col text-left">
                    {/* 4 Overlapping Avatar Circles */}
                    <div className="flex -space-x-2 overflow-hidden mb-1.5">
                      {supportCommunityData.communityCard.avatars.map((avatar, i) => (
                        <img
                          key={i}
                          src={avatar}
                          alt="Supporter"
                          className="inline-block h-7 w-7 rounded-full ring-2 ring-black object-cover"
                        />
                      ))}
                    </div>

                    <p className="text-[11px] text-[#E8DFC8] font-medium max-w-[190px] leading-snug">
                      {supportCommunityData.communityCard.tagline}
                    </p>
                  </div>

                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[#F5D061]">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.div>
              </motion.div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM 4-CARD IMPACT GRID ================= */}
        <div className="mt-14 sm:mt-18">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportCommunityData.impactCards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => onSupportMission(card)}
                className="glass-gold-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:border-[#E5B842] hover:-translate-y-2 cursor-pointer shadow-xl min-h-[220px]"
              >
                {/* Subtle Background Accent Image with Warm Overlay */}
                <div className="absolute inset-0 z-0 opacity-25 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover filter brightness-75 contrast-110 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0907] via-[#0B0907]/80 to-transparent" />
                </div>

                {/* Card Top: Icon */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md shadow-md group-hover:border-[#E5B842] group-hover:shadow-[0_0_15px_rgba(229,184,66,0.3)] transition-all">
                    {getIcon(card.type)}
                  </div>

                  <span className="text-[10px] font-mono text-[#E5B842] tracking-wider uppercase font-semibold">
                    {card.stat.split(' ')[0]}
                  </span>
                </div>

                {/* Card Middle & Bottom: Title, Description, and Circular Arrow */}
                <div className="relative z-10 mt-6 flex flex-col justify-between flex-1">
                  <div>
                    <h4 className="font-serif-luxury text-xl font-normal text-[#F7F4EE] group-hover:text-white transition-colors leading-snug">
                      {card.title}
                    </h4>
                    <p className="mt-2 text-xs text-[#CBC2B2] line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] tracking-widest text-white/50 uppercase font-cinzel group-hover:text-[#E5B842] transition-colors">
                      Learn More
                    </span>

                    {/* Circular Arrow Button (Matching Mockup) */}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-[#F5D061] transition-all duration-300 group-hover:border-[#E5B842] group-hover:bg-[#E5B842]/20 group-hover:translate-x-0.5">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
