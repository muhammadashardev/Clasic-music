import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function TrailerButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5 }}
      className="group relative flex items-center gap-4 text-left select-none focus:outline-none"
      aria-label="Watch the trailer video"
    >
      {/* Outer Glowing Circle Button */}
      <div className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center">
        {/* Pulsing Aura Rings */}
        <div className="absolute inset-0 rounded-full border border-[#E5B842]/40 animate-ping opacity-30" />
        <div className="absolute -inset-1 rounded-full bg-[#E5B842]/15 blur-md transition-all duration-500 group-hover:bg-[#E5B842]/30 group-hover:scale-110" />

        {/* Solid Circle */}
        <div className="relative flex h-full w-full items-center justify-center rounded-full border border-[#E5B842]/70 bg-black/60 backdrop-blur-md transition-all duration-300 group-hover:border-[#FFF1BE] group-hover:bg-[#E5B842]/25 group-hover:scale-105 shadow-[0_0_20px_rgba(229,184,66,0.25)]">
          <Play className="h-5 w-5 md:h-6 md:w-6 fill-[#F5D061] text-[#F5D061] ml-0.5 transition-transform duration-300 group-hover:scale-110" />
        </div>
      </div>

      {/* Text Label */}
      <div className="flex flex-col tracking-[0.24em] font-cinzel leading-snug">
        <span className="text-[11px] md:text-xs font-semibold text-[#F4EFE6] group-hover:text-white transition-colors uppercase">
          Watch
        </span>
        <span className="text-[11px] md:text-xs font-bold text-[#E5B842] group-hover:text-[#FFF2C2] transition-colors uppercase drop-shadow-[0_0_8px_rgba(229,184,66,0.4)]">
          The Trailer
        </span>
      </div>
    </motion.button>
  );
}
