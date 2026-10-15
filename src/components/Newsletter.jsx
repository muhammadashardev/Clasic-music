import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { newsletterSectionData } from '../data/mockData';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribed(true);
    confetti({
      particleCount: 85,
      spread: 75,
      origin: { y: 0.7 },
      colors: ['#E5B842', '#F5D061', '#FFF4D2', '#D4AF37'],
    });
  };

  return (
    <section
      id="newsletter"
      className="relative w-full overflow-hidden  text-[#F4EFE6] py-24 md:py-32 lg:py-36 border-t border-[#D4AF37]/15"
    >
      {/* 1. Raw Photographic Background Image of Golden Opera Hall */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src="/newsletter-bg.png"
          alt="The Grand Symphony Opera Hall with sheet music and warm bokeh chandeliers"
          className="h-full w-full object-cover object-center filter brightness-[1] "
        />

        {/* Sophisticated Vignettes & Atmospheric Overlays */}

        {/* Central warm golden ambient radiance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#E5B842]/10 blur-[150px] pointer-events-none" />
      </div>

      {/* 2. Floating Golden Stardust Particles */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#F5D061]"
            style={{
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              top: `${(i * 17) % 95}%`,
              left: `${(i * 23) % 95}%`,
              opacity: 0.35 + (i % 5) * 0.12,
              boxShadow: '0 0 8px rgba(245, 208, 97, 0.8)',
            }}
            animate={{
              y: [0, -18, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (i * 0.3) % 2,
            }}
          />
        ))}
      </div>

      {/* 3. Centered Content Container */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 md:px-12 text-center">
        
        {/* Eyebrow flanked by delicate horizontal rules */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 select-none"
        >
          <div className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
          <span className="font-cinzel text-xs sm:text-[13px] font-semibold tracking-[0.32em] text-[#D4AF37] uppercase">
            {newsletterSectionData.eyebrow}
          </span>
          <div className="h-[1px] w-12 sm:w-20 md:w-28 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
        </motion.div>

        {/* Large Headline with Musical Waves & Treble Clef (Matching Mockup) */}
        <div className="relative mt-5 sm:mt-6 flex items-center justify-center select-none">
          
          {/* Left Golden Treble Clef & Undulating Staff Lines */}
          <div className="pointer-events-none absolute -left-4 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 hidden sm:flex items-center">
            {/* Treble Clef SVG */}
            <svg
              viewBox="0 0 24 32"
              fill="none"
              className="h-16 w-12 md:h-20 md:w-16 text-[#D4AF37] opacity-80 drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]"
            >
              <path
                d="M12.5 2C12.5 2 13 8 9 11C6.5 12.8 5 15.5 5 18.5C5 22.6 8.1 26 12 26C16.4 26 19.5 22.4 19.5 18C19.5 14.5 17 11.8 14 11V2H12.5ZM12 4V13.2C10.5 13.8 9.5 15.2 9.5 17C9.5 19.2 11.2 21 13.5 21C15.7 21 17.5 19.2 17.5 17C17.5 14.2 15.5 12 12.5 11.8V4H12ZM12 24C10.3 24 9 22.7 9 21C9 19.3 10.3 18 12 18C13.7 18 15 19.3 15 21C15 22.7 13.7 24 12 24ZM12 27.5C12 29 11 30.5 9 30.5C7.5 30.5 6.5 29.5 6.5 28.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Waving Staff Line behind */}
            <svg viewBox="0 0 120 40" fill="none" className="h-10 w-24 text-[#D4AF37]/40 -ml-2">
              <path d="M0 20 Q 30 5, 60 20 T 120 20" stroke="currentColor" strokeWidth="1" />
              <path d="M0 26 Q 30 11, 60 26 T 120 26" stroke="currentColor" strokeWidth="1" />
              <path d="M0 14 Q 30 -1, 60 14 T 120 14" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          {/* Main Headline Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center gap-3 font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-[#F7F4EE]"
          >
            <span className="drop-shadow-md">
              {newsletterSectionData.titleLine1}
            </span>
            <span className="gold-text-gradient italic pr-2 drop-shadow-[0_4px_25px_rgba(229,184,66,0.3)]">
              {newsletterSectionData.titleLine2}
            </span>
          </motion.h2>

          {/* Right Floating Musical Notes */}
          <div className="pointer-events-none absolute -right-4 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 text-[#E5B842]/70">
            <svg viewBox="0 0 120 40" fill="none" className="h-10 w-24 text-[#D4AF37]/40">
              <path d="M0 20 Q 30 35, 60 20 T 120 20" stroke="currentColor" strokeWidth="1" />
              <path d="M0 26 Q 30 41, 60 26 T 120 26" stroke="currentColor" strokeWidth="1" />
              <path d="M0 14 Q 30 29, 60 14 T 120 14" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="text-xl md:text-2xl font-serif">♪</span>
            <span className="text-2xl md:text-3xl font-serif -mt-3">♫</span>
          </div>

        </div>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 font-sans-clean text-xs sm:text-sm md:text-base font-normal leading-relaxed text-[#CBC2B2] max-w-xl mx-auto text-pretty"
        >
          {newsletterSectionData.subtitle}
        </motion.p>

        {/* Form Container (Pill Container Matching Mockup) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 sm:mt-12"
        >
          {!isSubscribed ? (
            <form
              onSubmit={handleSubscribe}
              className="group/form relative mx-auto flex w-full max-w-2xl flex-col sm:flex-row items-center rounded-full border border-[#D4AF37]/50 bg-[#0C0A08]/90 p-1.5 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.85)] transition-all duration-300 focus-within:border-[#F5D061] focus-within:shadow-[0_0_30px_rgba(229,184,66,0.25)]"
            >
              {/* Mail Icon & Input */}
              <div className="flex flex-1 items-center w-full px-3 sm:px-4 py-2 sm:py-0">
                <Mail className="h-5 w-5 text-[#E5B842] shrink-0" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletterSectionData.placeholder}
                  className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-[#F5EEDC] placeholder-[#8E8373] focus:outline-none font-sans-clean"
                />
              </div>

              {/* Subscribe Button (Gold Pill) */}
              <button
                type="submit"
                className="btn-gold-primary flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-8 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#120E06] whitespace-nowrap active:scale-95 transition-all duration-300"
              >
                <span>{newsletterSectionData.buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          ) : (
            /* Success Confirmation State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-gold-card mx-auto flex max-w-xl items-center justify-center gap-3 rounded-full py-4 px-6 border-[#E5B842] bg-[#120F0B]/90 shadow-[0_0_30px_rgba(229,184,66,0.35)]"
            >
              <CheckCircle2 className="h-5 w-5 text-[#F5D061]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#FFF4D2] tracking-wider">
                Welcome to The Grand Symphony Circle! Invitation confirmed.
              </span>
            </motion.div>
          )}

          <p className="mt-4 text-[10px] sm:text-[11px] tracking-wider text-white/40">
            {newsletterSectionData.privacyNote}
          </p>
        </motion.div>

        {/* Bottom Center Classical Diamond Finial Ornament (Matching Mockup) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex items-center justify-center gap-3 select-none"
        >
          <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
          
          {/* Gothic Diamond Spire / Fleur-de-lis SVG */}
          <div className="flex items-center justify-center text-[#E5B842]">
            <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 drop-shadow-[0_0_8px_rgba(229,184,66,0.5)]">
              <path
                d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z"
                fill="currentColor"
              />
              <circle cx="10" cy="10" r="1.5" fill="#FFF4D2" />
            </svg>
          </div>

          <div className="h-[1px] w-20 sm:w-32 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]" />
        </motion.div>

      </div>
    </section>
  );
}
