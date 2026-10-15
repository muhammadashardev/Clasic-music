import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Sparkles, CheckCircle2, Award, Users } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SponsorshipModal({ isOpen, onClose, initialImpact }) {
  const [selectedTier, setSelectedTier] = useState(150);
  const [isSuccess, setIsSuccess] = useState(false);
  const [donorName, setDonorName] = useState('');

  const tiers = [
    { amount: 50, label: 'Patron', benefit: 'Name in season program & digital archive' },
    { amount: 150, label: 'Benefactor', benefit: 'Open rehearsal passes + VIP lounge access' },
    { amount: 350, label: 'Conductor Circle', benefit: 'Exclusive backstage reception with Maestro Vance' },
    { amount: 1000, label: 'Grand Laureate', benefit: 'Endow an orchestral chair & season box seat' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#E5B842', '#F5D061', '#FFF4D2', '#D4AF37'],
    });
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.3 }}
          className="glass-gold-card relative w-full max-w-xl overflow-hidden rounded-3xl p-6 md:p-8 text-[#F4EFE6] shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 rounded-full border border-white/20 p-2 text-white/70 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-[#E5B842] fill-current" />
                  <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
                    Philanthropy & Endowment
                  </span>
                </div>
                <h2 className="font-serif-luxury mt-1.5 text-2xl md:text-3xl font-bold text-[#FFF4D2]">
                  Keep Classical Music Alive
                </h2>
                <p className="mt-1 text-xs text-white/65">
                  {initialImpact ? initialImpact.title : 'Every contribution directly funds youth scholarships, instruments, and world-class performances.'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Donation Tiers Grid */}
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-2">
                    Choose Your Gift Tier
                  </label>
                  <div className="grid grid-cols-2 gap-2.5">
                    {tiers.map((t) => (
                      <div
                        key={t.amount}
                        onClick={() => setSelectedTier(t.amount)}
                        className={`cursor-pointer rounded-xl border p-3 transition-all ${
                          selectedTier === t.amount
                            ? 'border-[#E5B842] bg-[#E5B842]/15 shadow-[0_0_15px_rgba(229,184,66,0.25)]'
                            : 'border-white/10 bg-black/40 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-cinzel text-base font-bold text-[#F5D061]">${t.amount}</span>
                          <span className="text-[10px] font-bold text-white/70 uppercase">{t.label}</span>
                        </div>
                        <p className="mt-1 text-[10px] text-white/50 leading-tight">{t.benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Donor Name Input */}
                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1.5">
                    Donor Recognition Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord & Lady Hamilton / Anonymous"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-black/60 px-4 py-2.5 text-xs text-[#F5EEDC] focus:border-[#E5B842] focus:outline-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">Your Support</span>
                    <span className="font-cinzel text-xl font-bold text-[#F5D061]">${selectedTier} USD</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold-primary rounded-full px-7 py-3 text-xs font-bold uppercase tracking-widest"
                  >
                    Complete Sponsorship
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Confirmation Screen */
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5B842]/20 border border-[#E5B842]">
                <CheckCircle2 className="h-9 w-9 text-[#F5D061]" />
              </div>
              <h3 className="font-serif-luxury mt-4 text-3xl font-bold text-[#FFF4D2]">
                Thank You For Your Patronage
              </h3>
              <p className="mt-2 text-xs text-white/70 max-w-sm">
                Your generous gift of <strong className="text-[#F5D061]">${selectedTier}</strong> as <strong className="text-white">{donorName}</strong> empowers the next generation of classical musicians and keeps the sacred art of the symphony alive.
              </p>

              <div className="mt-5 w-full rounded-xl border border-[#D4AF37]/30 bg-black/50 p-4 text-left">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="font-cinzel text-[10px] font-bold text-[#D4AF37] uppercase">Sponsorship Certificate</span>
                  <Award className="h-4 w-4 text-[#E5B842]" />
                </div>
                <div className="mt-2 text-xs space-y-1">
                  <p className="text-white/80">Patron: <span className="font-bold text-[#F5D061]">{donorName}</span></p>
                  <p className="text-white/60">Certificate No: <span className="font-mono text-[#D4AF37]">SYM-PATRON-2026</span></p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="btn-gold-primary mt-6 rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-widest"
              >
                Return to Symphony
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
