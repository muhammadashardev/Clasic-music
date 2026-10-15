import { motion } from 'framer-motion';
import { heroQuote } from '../data/mockData';

export default function QuoteCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.55 }}
      className="hidden lg:flex flex-col max-w-[340px] xl:max-w-[380px] text-left select-none"
    >
      {/* Decorative Gold Double Quotation Mark */}
      <div className="mb-1 text-4xl xl:text-5xl font-serif text-[#D4AF37] leading-none opacity-85 select-none drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
        “
      </div>

      {/* Quote Italic Typography */}
      <p className="font-serif-luxury text-base xl:text-lg italic leading-relaxed text-[#EDE5D8] tracking-wide text-pretty">
        {heroQuote.quote}
      </p>

      {/* Attribution */}
      <div className="mt-3 flex items-center gap-2">
        <span className="h-[1px] w-6 bg-[#D4AF37]/60" />
        <span className="font-cinzel text-[11px] font-bold tracking-[0.28em] text-[#D4AF37] uppercase">
          {heroQuote.author}
        </span>
      </div>
    </motion.div>
  );
}
