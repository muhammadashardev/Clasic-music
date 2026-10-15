import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, History, Sparkles } from 'lucide-react';
import { orchestraStory } from '../data/mockData';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          className="glass-gold-card relative w-full max-w-2xl overflow-hidden rounded-3xl p-6 md:p-8 text-[#F4EFE6] shadow-[0_25px_60px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full border border-white/20 p-2 text-white/70 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="h-4 w-4 text-[#E5B842]" />
            <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
              {orchestraStory.badge}
            </span>
          </div>

          <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-[#FFF4D2]">
            {orchestraStory.title}
          </h2>
          <p className="font-serif-luxury text-base text-[#E5B842] italic mt-0.5">
            {orchestraStory.subtitle}
          </p>

          {/* Paragraphs */}
          <div className="mt-5 space-y-4 text-xs md:text-sm leading-relaxed text-[#DCD4C6]">
            {orchestraStory.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Key Statistics Grid */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-y border-white/10 py-5">
            {orchestraStory.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <span className="font-cinzel text-xl md:text-2xl font-bold text-[#F5D061] block">
                  {stat.value}
                </span>
                <span className="text-[10px] tracking-wider text-white/50 uppercase mt-0.5 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Hall Quote */}
          <div className="mt-6 rounded-2xl border border-[#D4AF37]/30 bg-black/50 p-4 text-center">
            <p className="font-serif-luxury text-base italic text-[#F5EEDC]">
              “The hall breathes with you. The sound isn’t just heard — it is felt down to the marrow.”
            </p>
            <span className="font-cinzel text-[10px] font-bold text-[#E5B842] tracking-widest uppercase block mt-1">
              — Maestro Alexander Vance, Music Director
            </span>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="btn-gold-primary rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-widest"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
