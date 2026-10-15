import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, Sparkles, Music } from 'lucide-react';
import { trailerInfo } from '../data/mockData';

export default function TrailerModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.35 }}
          className="glass-gold-card relative w-full max-w-3xl overflow-hidden rounded-3xl p-6 md:p-8 text-[#F4EFE6] shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 rounded-full border border-white/20 bg-black/60 p-2 text-white/70 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Video Preview Frame */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-black shadow-2xl">
            <img
              src="/orchestra-bg.jpg"
              alt="Orchestra live concert"
              className={`h-full w-full object-cover transition-transform duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-75'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Simulated cinematic subtitles / conductor quote */}
            <div className="absolute bottom-16 left-6 right-6 text-center">
              <p className="font-serif-luxury text-sm md:text-lg italic text-[#FFF4D2] drop-shadow-md">
                “When one hundred instruments breathe together as one, silence itself becomes holy.”
              </p>
              <span className="font-cinzel text-[10px] tracking-widest text-[#E5B842] uppercase">
                {trailerInfo.conductor} • {trailerInfo.hall}
              </span>
            </div>

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-md px-4 py-3 flex items-center gap-3 border-t border-white/10">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E5B842] text-black transition-transform hover:scale-105"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-current ml-0.5" />}
              </button>

              {/* Progress scrubber */}
              <div
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  setProgress(Math.round((clickX / rect.width) * 100));
                }}
                className="relative flex-1 h-2 rounded-full bg-white/20 cursor-pointer overflow-hidden"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#DFAB42] to-[#FFF1BE] rounded-full shadow-[0_0_8px_#E5B842]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="text-[10px] font-mono text-white/70">
                01:24 / {trailerInfo.runtime}
              </span>

              <Volume2 className="h-4 w-4 text-[#E5B842]" />
            </div>
          </div>

          {/* Info below trailer */}
          <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#E5B842]" />
                <span className="font-cinzel text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase">
                  Season 2024 / 2025 Trailer
                </span>
              </div>
              <h3 className="font-cinzel text-lg font-bold text-[#FFF4D2]">
                {trailerInfo.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] tracking-widest text-white/50 uppercase">Featuring:</span>
              <div className="flex gap-1.5 flex-wrap">
                {trailerInfo.repertoire.map((piece, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-black/40 px-2.5 py-0.5 text-[10px] text-[#F5D061]"
                  >
                    {piece}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
