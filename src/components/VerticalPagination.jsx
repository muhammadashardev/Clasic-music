import { motion } from 'framer-motion';

export default function VerticalPagination({
  currentIndex = 0,
  total = 5,
  onSelect,
}) {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.3 }}
      className="hidden md:flex flex-col items-center justify-center gap-3.5 select-none"
      aria-label="Carousel pagination indicator"
    >
      {/* Top accent golden dot */}
      <div className="h-1.5 w-1.5 rounded-full bg-[#E5B842] shadow-[0_0_8px_#E5B842]" />

      {/* Vertical subtle track line with progress fill */}
      <div className="relative h-14 w-[1px] bg-white/20">
        <motion.div
          className="absolute top-0 w-full bg-[#E5B842] shadow-[0_0_6px_#E5B842]"
          animate={{
            height: `${((currentIndex + 1) / total) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </div>

      {/* Middle subtle dot */}
      <div className="h-1 w-1 rounded-full bg-white/40" />

      {/* Second vertical track line */}
      <div className="h-12 w-[1px] bg-white/15" />

      {/* Slide counter: 01 / 05 */}
      <div className="flex flex-col items-center font-sans-clean text-[11px] tracking-[0.25em] text-[#D8CFBF]">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bold text-[#F5D061] drop-shadow-[0_0_6px_rgba(245,208,97,0.5)]"
        >
          {currentFormatted}
        </motion.span>
        <span className="my-0.5 text-white/40">—</span>
        <span className="text-white/50">{totalFormatted}</span>
      </div>
    </motion.aside>
  );
}
