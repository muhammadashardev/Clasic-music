import { motion } from 'framer-motion';

export default function ScrollIndicator({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6 }}
      className="group flex flex-col sm:flex-row items-center gap-2.5 text-center text-[10px] md:text-[11px] font-semibold tracking-[0.28em] text-[#C5BBAA] hover:text-[#F5D061] transition-colors uppercase focus:outline-none cursor-pointer"
      aria-label="Scroll to discover"
    >
      {/* Mouse Icon with Animated Dot */}
      <div className="relative flex h-6 w-3.5 items-start justify-center rounded-full border border-white/30 group-hover:border-[#E5B842] p-1 transition-colors">
        <motion.div
          animate={{
            y: [0, 6, 0],
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="h-1 w-1 rounded-full bg-[#E5B842] shadow-[0_0_4px_#E5B842]"
        />
      </div>

      <span>Scroll to discover</span>
    </motion.button>
  );
}
