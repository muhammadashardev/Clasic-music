import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function EventCard({
  event,
  onPrev,
  onNext,
  onViewDetails,
}) {
  if (!event) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="glass-gold-card group relative w-full max-w-[560px] rounded-2xl p-4 md:p-5 transition-all duration-500"
    >
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
        {/* Left: Concert Hall Thumbnail */}
        <div className="relative h-28 w-full sm:h-28 sm:w-40 shrink-0 overflow-hidden rounded-xl border border-[#D4AF37]/30 bg-black/60 shadow-lg">
          <motion.img
            key={event.id}
            src={event.image}
            alt={event.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-2 left-2 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-semibold tracking-wider text-[#F5D061] border border-[#D4AF37]/40 backdrop-blur-sm">
            {event.seatsLeft} SEATS LEFT
          </div>
        </div>

        {/* Right: Event Information & Carousel Arrows */}
        <div className="flex flex-1 flex-col justify-between w-full">
          <div className="flex items-start justify-between gap-2">
            <div>
              {/* Tag */}
              <span className="font-cinzel text-[10px] font-bold tracking-[0.28em] text-[#D4AF37] uppercase">
                {event.tag}
              </span>

              {/* Title with smooth crossfade */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={event.title}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="font-cinzel mt-0.5 text-base md:text-lg font-bold text-[#F4EFE6] tracking-wide"
                >
                  {event.title}
                </motion.h3>
              </AnimatePresence>
            </div>

            {/* Circular Prev & Next Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onPrev}
                aria-label="Previous concert"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 backdrop-blur-sm transition-all hover:border-[#E5B842] hover:bg-[#E5B842]/20 hover:text-[#F5D061] active:scale-90"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={onNext}
                aria-label="Next concert"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white/70 backdrop-blur-sm transition-all hover:border-[#E5B842] hover:bg-[#E5B842]/20 hover:text-[#F5D061] active:scale-90"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Date & Location metadata */}
          <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium tracking-wider text-[#C8BFB2]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-[#E5B842]" />
              <span>{event.date}</span>
            </span>

            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#E5B842]" />
              <span className="uppercase">{event.location}</span>
            </span>
          </div>

          {/* View Details Link */}
          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => onViewDetails(event)}
              className="group/link inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] text-[#E5B842] uppercase transition-colors hover:text-[#FFF2C2]"
            >
              <span>View Details</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
            </button>

            <span className="text-[10px] tracking-wider text-white/40 font-mono">
              {event.time}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
