import { motion } from 'framer-motion';
import { Calendar, Play } from 'lucide-react';
import GoldenWaveEffect from './GoldenWaveEffect';
import VerticalPagination from './VerticalPagination';
import EventCard from './EventCard';
import TrailerButton from './TrailerButton';
import QuoteCard from './QuoteCard';
import ScrollIndicator from './ScrollIndicator';

export default function Hero({
  events,
  currentEventIndex,
  onPrevEvent,
  onNextEvent,
  onSelectEvent,
  onOpenBooking,
  onOpenTrailer,
  onOpenStory,
}) {
  const currentEvent = events[currentEventIndex] || events[0];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#070605] text-[#F4EFE6] flex flex-col justify-between"
    >
      {/* 1. Cinematic Background Image (Raw Orchestra Photo) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/orchestra-bg.jpg"
          alt="The Grand Symphony Orchestra & Conductor"
          className="h-full w-full object-cover object-center scale-[1.02] filter brightness-[0.88] contrast-[1.06]"
        />

        {/* Sophisticated Vignette & Atmospheric Gradients */}
        {/* Left deep shadow for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070605] via-[#070605]/80 via-40% to-transparent" />

        {/* Top shadow for navigation */}

        {/* Bottom shadow for bottom cards */}
        <div className="absolute bottom-0 inset-x-0 h-72 bg-gradient-to-t from-[#070605] via-[#070605]/75 to-transparent" />

        {/* Radial amber glow around chandelier / conductor */}
      </div>

      {/* 2. Dynamic Golden Stardust Wave Effect */}

      {/* 3. Main Hero Body Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1720px] flex-1 flex-col justify-between px-6 pt-6 pb-6 md:px-12 lg:px-16">
        
        {/* Upper Center / Hero Core Content */}
        <div className="mt-8 sm:mt-12 md:mt-14 lg:mt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          
          {/* Left Hero Column: Pagination + Typography + CTAs */}
          <div className="flex items-start gap-6 sm:gap-8 md:gap-10 xl:gap-14">
            
            {/* Left Vertical Pagination (01 / 05) */}
            <div className="pt-3">
              <VerticalPagination
                currentIndex={currentEventIndex}
                total={events.length}
                onSelect={onSelectEvent}
              />
            </div>

            {/* Typography & Call to Actions */}
            <div className="flex flex-col text-left max-w-2xl">
              
              {/* Eyebrow / Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-3 select-none"
              >
                <span className="h-[1px] w-6 md:w-10 bg-[#D4AF37]/70" />
                <span className="font-cinzel text-[11px] sm:text-xs font-semibold tracking-[0.38em] text-[#D4AF37] uppercase">
                  The Grand Symphony
                </span>
              </motion.div>

              {/* Big Luxury Title */}
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15 }}
                className="mt-3.5 flex flex-col font-serif-luxury font-normal leading-[1.08] tracking-tight text-white select-none"
              >
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] text-[#FCFAF7] drop-shadow-md">
                  Where Music
                </span>
                <span className="gold-text-gradient text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-normal italic pr-2 drop-shadow-[0_4px_25px_rgba(229,184,66,0.25)]">
                  Becomes Timeless
                </span>
              </motion.h1>

              {/* Decorative Golden Filigree / Horizontal Divider */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="mt-4 flex items-center gap-2 select-none"
              >
                <div className="h-[1px] w-12 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                <div className="flex items-center gap-1">
                  <div className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37] bg-[#E5B842]/40" />
                  <div className="h-2 w-2 rotate-45 bg-[#E5B842] shadow-[0_0_6px_#E5B842]" />
                  <div className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37] bg-[#E5B842]/40" />
                </div>
                <div className="h-[1px] w-12 bg-gradient-to-l from-[#D4AF37] to-transparent" />
              </motion.div>

              {/* Subtitle Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.3 }}
                className="mt-5 max-w-lg font-sans-clean text-sm sm:text-base font-normal leading-relaxed text-[#CBC2B2] text-pretty"
              >
                Experience the beauty of classical music through extraordinary
                performances, remarkable musicians, and unforgettable evenings
                of live orchestral sound.
              </motion.p>

              {/* Call-to-Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
              >
                {/* Explore Events Button */}
                <button
                  onClick={onOpenBooking}
                  className="btn-gold-primary group flex items-center gap-2.5 rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase active:scale-95 transition-all duration-300"
                >
                  <Calendar className="h-4 w-4 text-[#120E06] transition-transform duration-300 group-hover:scale-110" />
                  <span>Explore Events</span>
                </button>

                {/* Discover Our Story Button */}
                <button
                  onClick={onOpenStory}
                  className="group flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-7 py-3.5 text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#F4EFE6] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#E5B842] hover:bg-[#E5B842]/10 hover:text-white hover:shadow-[0_0_20px_rgba(229,184,66,0.2)] active:scale-95"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 group-hover:border-[#E5B842]">
                    <Play className="h-2.5 w-2.5 fill-current ml-0.5 text-white group-hover:text-[#F5D061]" />
                  </div>
                  <span>Discover Our Story</span>
                </button>
              </motion.div>

            </div>
          </div>

          {/* Right Floating Content: Watch The Trailer Play Button */}
          <div className="self-end lg:self-center lg:mr-12 xl:mr-24 pt-4 lg:pt-0">
            <TrailerButton onClick={onOpenTrailer} />
          </div>

        </div>

        {/* 4. Bottom Row: Event Card (Left), Scroll Indicator (Center), Quote Card (Right) */}
        <div className="relative mt-12 sm:mt-16 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 pb-2">
          
          {/* Bottom Left Event Card */}
          <div className="w-full lg:w-auto">
            <EventCard
              event={currentEvent}
              onPrev={onPrevEvent}
              onNext={onNextEvent}
              onViewDetails={onOpenBooking}
            />
          </div>

          {/* Bottom Center Scroll Indicator */}
          <div className="order-last lg:order-none py-2">
            <ScrollIndicator
              onClick={() => {
                const el = document.getElementById('events-preview');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else onOpenBooking();
              }}
            />
          </div>

          {/* Bottom Right Pablo Casals Quote */}
          <div className="w-full lg:w-auto flex justify-end">
            <QuoteCard />
          </div>

        </div>

      </div>
    </section>
  );
}
