import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, CheckCircle2, Ticket, Users, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { upcomingEvents } from '../data/mockData';

export default function BookingModal({ isOpen, onClose, initialEvent }) {
  const [selectedEventId, setSelectedEventId] = useState(
    initialEvent ? initialEvent.id : upcomingEvents[0].id
  );
  const [tier, setTier] = useState('stalls');
  const [ticketCount, setTicketCount] = useState(2);
  const [isSuccess, setIsSuccess] = useState(false);

  const tiers = [
    { id: 'box', name: 'Royal Golden Box', price: 280, perks: 'Champagne service & best acoustic angle' },
    { id: 'stalls', name: 'Orchestra Front Stalls', price: 195, perks: 'Intimate conductor proximity' },
    { id: 'circle', name: 'Dress Circle (Tier 1)', price: 140, perks: 'Panoramic hall view' },
    { id: 'balcony', name: 'Grand Balcony', price: 85, perks: 'Elevated acoustic balance' },
  ];

  const currentEvent =
    upcomingEvents.find((e) => e.id === Number(selectedEventId)) || upcomingEvents[0];
  const activeTier = tiers.find((t) => t.id === tier) || tiers[0];
  const totalPrice = activeTier.price * ticketCount;

  const handleBooking = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 80,
      spread: 70,
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="glass-gold-card relative w-full max-w-2xl overflow-hidden rounded-3xl p-6 md:p-8 text-[#F4EFE6] shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 rounded-full border border-white/20 p-2 text-white/70 transition-colors hover:border-[#E5B842] hover:text-[#E5B842]"
          >
            <X className="h-5 w-5" />
          </button>

          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-[#E5B842]" />
                  <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
                    Official Box Office
                  </span>
                </div>
                <h2 className="font-cinzel mt-1 text-2xl md:text-3xl font-bold text-[#FFF4D2]">
                  Reserve Your Symphony Experience
                </h2>
                <p className="mt-1 text-xs text-white/60">
                  Select your performance, prime seating tier, and join us for an extraordinary evening.
                </p>
              </div>

              <form onSubmit={handleBooking} className="space-y-5">
                {/* Concert Selector */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1.5">
                    Select Performance
                  </label>
                  <select
                    value={selectedEventId}
                    onChange={(e) => setSelectedEventId(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/20 bg-black/70 px-4 py-2.5 text-sm text-[#F5EEDC] focus:border-[#E5B842] focus:outline-none"
                  >
                    {upcomingEvents.map((evt) => (
                      <option key={evt.id} value={evt.id} className="bg-[#120F0C] text-[#F5EEDC]">
                        {evt.title} — {evt.date} ({evt.location})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Event Highlights Strip */}
                <div className="flex items-center gap-4 rounded-xl border border-[#D4AF37]/20 bg-[#16120D]/60 p-3 text-xs text-white/80">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-[#E5B842]" />
                    <span>{currentEvent.date} ({currentEvent.time})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[#E5B842]" />
                    <span>{currentEvent.location}</span>
                  </div>
                </div>

                {/* Seating Tiers Grid */}
                <div>
                  <label className="block text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase mb-2">
                    Select Seating Tier
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tiers.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => setTier(t.id)}
                        className={`cursor-pointer rounded-xl border p-3 transition-all ${
                          tier === t.id
                            ? 'border-[#E5B842] bg-[#E5B842]/15 shadow-[0_0_15px_rgba(229,184,66,0.25)]'
                            : 'border-white/10 bg-black/40 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#F5EEDC]">{t.name}</span>
                          <span className="font-cinzel text-xs font-bold text-[#F5D061]">${t.price}</span>
                        </div>
                        <p className="mt-1 text-[10px] text-white/50">{t.perks}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity & Summary */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-[#E5B842]" />
                    <span className="text-xs font-medium text-white/80">Tickets:</span>
                    <div className="flex items-center gap-2 rounded-lg border border-white/20 bg-black/50 px-2 py-1">
                      <button
                        type="button"
                        onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                        className="h-6 w-6 text-sm text-white/70 hover:text-white"
                      >
                        -
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-[#F5D061]">
                        {ticketCount}
                      </span>
                      <button
                        type="button"
                        onClick={() => setTicketCount(Math.min(8, ticketCount + 1))}
                        className="h-6 w-6 text-sm text-white/70 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <span className="text-[10px] tracking-wider text-white/50 uppercase block">Total</span>
                      <span className="font-cinzel text-xl font-bold text-[#F5D061]">
                        ${totalPrice}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="btn-gold-primary rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-bold"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              </form>
            </>
          ) : (
            /* Success confirmation screen */
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5B842]/20 border border-[#E5B842]">
                <CheckCircle2 className="h-9 w-9 text-[#F5D061]" />
              </div>
              <h3 className="font-cinzel mt-4 text-2xl font-bold text-[#FFF4D2]">
                Reservation Confirmed!
              </h3>
              <p className="mt-2 text-xs text-white/70 max-w-md">
                Your reservation for <strong className="text-[#F5D061]">{currentEvent.title}</strong> has been secured. Your digital tickets and orchestral program have been sent to your confirmation email.
              </p>

              {/* Ticket Preview Card */}
              <div className="mt-5 w-full max-w-sm rounded-2xl border border-[#D4AF37]/40 bg-black/60 p-4 text-left shadow-xl">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-cinzel text-[11px] font-bold text-[#D4AF37] uppercase">THE GRAND SYMPHONY</span>
                  <Sparkles className="h-3.5 w-3.5 text-[#E5B842]" />
                </div>
                <div className="mt-2">
                  <p className="font-cinzel text-sm font-bold text-[#F4EFE6]">{currentEvent.title}</p>
                  <p className="text-[11px] text-white/60">{currentEvent.date} • {currentEvent.time}</p>
                  <p className="text-[11px] text-white/60">{activeTier.name} — {ticketCount} Seats</p>
                  <p className="mt-2 text-[10px] tracking-widest text-[#E5B842] font-mono">TKT-8849-VIENNA</p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="btn-gold-primary mt-6 rounded-full px-8 py-2.5 text-xs font-bold uppercase tracking-widest"
              >
                Close & Return
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
