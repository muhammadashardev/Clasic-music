import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Tickets & Patronage', message: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 70,
      spread: 60,
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
                  <MessageSquare className="h-4 w-4 text-[#E5B842]" />
                  <span className="font-cinzel text-xs font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
                    Concierge & Patron Services
                  </span>
                </div>
                <h2 className="font-serif-luxury mt-1.5 text-2xl md:text-3xl font-bold text-[#FFF4D2]">
                  Get in Touch with The Grand Symphony
                </h2>
                <p className="mt-1 text-xs text-white/65">
                  Reach our box office, artistic administration, or patronage development team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-black/60 px-3.5 py-2.5 text-xs text-[#F5EEDC] focus:border-[#E5B842] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/20 bg-black/60 px-3.5 py-2.5 text-xs text-[#F5EEDC] focus:border-[#E5B842] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1">
                    Inquiry Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-white/20 bg-black/60 px-3.5 py-2.5 text-xs text-[#F5EEDC] focus:border-[#E5B842] focus:outline-none"
                  >
                    <option value="Tickets & Patronage" className="bg-[#120F0C]">Tickets & Box Office</option>
                    <option value="VIP Box & Hospitality" className="bg-[#120F0C]">VIP Box & Hospitality</option>
                    <option value="Auditions & Fellowship" className="bg-[#120F0C]">Musician Auditions & Fellowships</option>
                    <option value="Press & Media" className="bg-[#120F0C]">Press & Media Accreditation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-widest text-[#D4AF37] uppercase mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="How can our concert administration assist you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-white/20 bg-black/60 px-3.5 py-2.5 text-xs text-[#F5EEDC] focus:border-[#E5B842] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-white/50">
                    <Phone className="h-3.5 w-3.5 text-[#E5B842]" />
                    <span>+43 1 505 8190</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold-primary flex items-center gap-2 rounded-full px-7 py-2.5 text-xs font-bold uppercase tracking-widest"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center py-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5B842]/20 border border-[#E5B842]">
                <CheckCircle2 className="h-9 w-9 text-[#F5D061]" />
              </div>
              <h3 className="font-serif-luxury mt-4 text-3xl font-bold text-[#FFF4D2]">
                Message Delivered
              </h3>
              <p className="mt-2 text-xs text-white/70 max-w-sm">
                Thank you, <strong className="text-white">{formData.name}</strong>. Our patron concierge desk in Vienna will reply to <span className="text-[#F5D061]">{formData.email}</span> within 24 hours.
              </p>
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
