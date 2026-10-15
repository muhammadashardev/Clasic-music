import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Camera } from 'lucide-react';
import { featuredPerformanceData } from '../data/mockData';

export default function GalleryModal({ isOpen, onClose }) {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const items = featuredPerformanceData.galleryCards;
  const currentItem = items[selectedIdx];

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIdx((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="glass-gold-card relative w-full max-w-4xl overflow-hidden rounded-3xl p-6 md:p-8 text-[#F4EFE6] shadow-[0_25px_80px_rgba(0,0,0,0.95)] max-h-[90vh] flex flex-col justify-between"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 rounded-full border border-white/20 bg-black/60 p-2 text-white/70 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <Camera className="h-4 w-4 text-[#E5B842]" />
            <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
              The Grand Symphony Archive Gallery
            </span>
          </div>

          {/* Main Photo Showcase */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentItem.image}
                src={currentItem.image}
                alt={currentItem.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

            {/* Carousel navigation arrows over image */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-[#F5D061] backdrop-blur-md hover:border-[#E5B842] hover:bg-black/90 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/60 text-[#F5D061] backdrop-blur-md hover:border-[#E5B842] hover:bg-black/90 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Photo Info Caption */}
            <div className="absolute bottom-4 left-6 right-6">
              <span className="font-cinzel text-[10px] font-bold text-[#E5B842] tracking-widest uppercase">
                {currentItem.category}
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
                {currentItem.title}
              </h3>
              <p className="text-xs text-white/70 mt-1 max-w-lg">
                {currentItem.desc} • Repertoire: {currentItem.pieces}
              </p>
            </div>
          </div>

          {/* Thumbnails strip below */}
          <div className="mt-4 flex items-center justify-center gap-3 overflow-x-auto py-2">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className={`relative h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition-all ${
                  selectedIdx === idx
                    ? 'border-[#E5B842] scale-105 shadow-[0_0_12px_rgba(229,184,66,0.4)]'
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
