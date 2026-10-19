import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useScroll, useTransform } from 'framer-motion';
import {
  Sparkles,
  Music2,
  Users,
  GraduationCap,
  Globe,
  ArrowRight,
  Compass,
  Award,
  Calendar,
  ChevronRight,
  ChevronDown,
  Play,
  Star,
  Quote,
  Mic2,
  Radio,
  Clock,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import TrailerModal from '../components/TrailerModal';
import StoryModal from '../components/StoryModal';
import SponsorshipModal from '../components/SponsorshipModal';
import ContactModal from '../components/ContactModal';
import AudioPlayerWidget from '../components/AudioPlayerWidget';
import { aboutPageData, upcomingEvents } from '../data/mockData';

/* â”€â”€â”€ Reusable Animated Section Wrapper â”€â”€â”€ */
function RevealSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* â”€â”€â”€ Section Badge Component â”€â”€â”€ */
function SectionBadge({ text, align = 'center' }) {
  return (
    <div className={`flex items-center gap-3 select-none mb-3 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
      <div className={`h-[1px] ${align === 'center' ? 'w-12' : 'w-8'} bg-gradient-to-r from-transparent to-[#D4AF37]`} />
      <span className="font-cinzel text-[11px] font-semibold tracking-[0.34em] text-[#D4AF37] uppercase">
        {text}
      </span>
      <div className={`h-[1px] ${align === 'center' ? 'w-12' : 'w-8'} bg-gradient-to-l from-transparent to-[#D4AF37]`} />
    </div>
  );
}

/* â”€â”€â”€ Floating Orb Background â”€â”€â”€ */
function AmbientOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[700px] w-[900px] rounded-full bg-[#E5B842]/6 blur-[200px]" />
      <div className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/4 blur-[160px]" />
      <div className="absolute bottom-1/4 -left-24 h-[400px] w-[400px] rounded-full bg-[#C8960C]/4 blur-[140px]" />
    </div>
  );
}

export default function AboutUs({ onNavigateHome }) {
  const [activeMilestoneIdx, setActiveMilestoneIdx] = useState(0);
  const [activeValueId, setActiveValueId] = useState('artistry');
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSponsorOpen, setIsSponsorOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [hoveredPerson, setHoveredPerson] = useState(null);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const activeMilestone = aboutPageData.story.milestones[activeMilestoneIdx];

  const getValueIcon = (id) => {
    const cls = 'h-6 w-6 text-[#E5B842]';
    switch (id) {
      case 'artistry': return <Music2 className={cls} />;
      case 'community': return <Users className={cls} />;
      case 'education': return <GraduationCap className={cls} />;
      case 'innovation': return <Sparkles className={cls} />;
      default: return <Globe className={cls} />;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#070605] text-[#F4EFE6] selection:bg-[#E5B842]/30 selection:text-white">

      {/* NAVBAR */}
      <Navbar
        currentPage="about"
        onNavigate={(page) => { if (page === 'home' && onNavigateHome) onNavigateHome(); }}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenStory={() => setIsStoryOpen(true)}
      />

      <main>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 1 â€” CINEMATIC PARALLAX HERO
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex flex-col">

          {/* Parallax Background */}
          <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
            <img
              src="/images/concert_hall_thumb.jpg"
              alt="Grand Concert Hall"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050403]/95 via-[#070605]/72 to-[#070605]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-[#050403]/55" />
            <div className="absolute inset-0 bg-[#070605]/18" />
          </motion.div>

          {/* Gold shimmer overlay */}
          <div className="absolute inset-0 z-[1] pointer-events-none animate-shimmer opacity-35" />

          {/* Hero content fades on scroll */}
          <motion.div style={{ opacity: heroOpacity }} className="relative z-10 flex flex-1 flex-col">

            {/* Breadcrumb */}
            <div className="mx-auto w-full max-w-[1720px] px-6 md:px-12 lg:px-16 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 text-[11px] font-mono text-white/35"
              >
                <button onClick={onNavigateHome} className="hover:text-[#F5D061] transition-colors uppercase tracking-wider">
                  Home
                </button>
                <ChevronRight className="h-3 w-3" />
                <span className="text-[#E5B842] uppercase tracking-wider font-semibold">About Us</span>
              </motion.div>
            </div>

            {/* Main Hero Grid */}
            <div className="mx-auto flex flex-1 flex-col justify-center w-full max-w-[1720px] px-6 md:px-12 lg:px-16 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left: Headline */}
                <div className="flex flex-col text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex items-center gap-3 select-none mb-4"
                  >
                    <span className="h-[1px] w-10 bg-[#D4AF37]" />
                    <span className="font-cinzel text-[11px] font-bold tracking-[0.38em] text-[#D4AF37] uppercase">
                      {aboutPageData.hero.badge}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                    className="font-serif-luxury font-normal leading-[1.06] tracking-tight text-white select-none"
                  >
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] text-[#FCFAF7] drop-shadow-md">
                      {aboutPageData.hero.titleLine1}
                    </span>
                    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] gold-text-gradient italic pr-2 drop-shadow-[0_4px_30px_rgba(229,184,66,0.3)] mt-1">
                      {aboutPageData.hero.titleLine2}
                    </span>
                  </motion.h1>

                  {/* Filigree Divider */}
                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.55 }}
                    className="mt-5 flex items-center gap-2 select-none origin-left"
                  >
                    <div className="h-[1px] w-14 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                    <div className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37] bg-[#E5B842]/40" />
                    <div className="h-2 w-2 rotate-45 bg-[#E5B842] shadow-[0_0_8px_#E5B842]" />
                    <div className="h-1.5 w-1.5 rotate-45 border border-[#D4AF37] bg-[#E5B842]/40" />
                    <div className="h-[1px] w-14 bg-gradient-to-l from-[#D4AF37] to-transparent" />
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: 0.6 }}
                    className="mt-6 max-w-xl font-sans-clean text-sm sm:text-base md:text-lg leading-relaxed text-[#CBC2B2]"
                  >
                    {aboutPageData.hero.subtitle}
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.72 }}
                    className="mt-9 flex flex-wrap items-center gap-4"
                  >
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="btn-gold-primary group flex items-center gap-2.5 rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-95"
                    >
                      <Calendar className="h-4 w-4 text-[#120E06]" />
                      <span>Explore Concerts</span>
                    </button>
                    <button
                      onClick={() => setIsTrailerOpen(true)}
                      className="group flex items-center gap-2.5 rounded-full border border-white/25 bg-black/45 px-7 py-3.5 text-xs sm:text-[13px] font-semibold tracking-[0.2em] text-[#F4EFE6] uppercase backdrop-blur-md transition-all duration-300 hover:border-[#E5B842] hover:bg-[#E5B842]/10 active:scale-95"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 group-hover:border-[#E5B842]">
                        <Play className="h-2.5 w-2.5 fill-current ml-0.5 text-white group-hover:text-[#F5D061]" />
                      </div>
                      <span>Watch Our Story</span>
                    </button>
                  </motion.div>

                  {/* Trust Signals */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="mt-10 flex flex-wrap items-center gap-5 pt-6 border-t border-white/10"
                  >
                    {[
                      { icon: <Award className="h-4 w-4 text-[#E5B842]" />, text: '18 Grammy Awards' },
                      { icon: <Mic2 className="h-4 w-4 text-[#E5B842]" />, text: '110+ Musicians' },
                      { icon: <Radio className="h-4 w-4 text-[#E5B842]" />, text: 'Est. 1892' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        {item.icon}
                        <span className="text-[11px] font-mono text-white/50 tracking-widest uppercase">{item.text}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Right: Stats Cards Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.5 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {aboutPageData.hero.stats.map((st, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.55 + idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -4 }}
                      className="glass-gold-card group relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 hover:border-[#E5B842] cursor-default"
                    >
                      <div className="absolute top-0 left-0 h-12 w-12 rounded-br-2xl bg-gradient-to-br from-[#E5B842]/15 to-transparent pointer-events-none" />
                      <span className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#F5D061] group-hover:text-white transition-colors block leading-none">
                        {st.value}
                      </span>
                      <span className="mt-2 text-[11px] sm:text-xs tracking-wider text-white/55 uppercase block leading-tight font-sans-clean">
                        {st.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="relative z-10 mx-auto pb-8 flex flex-col items-center gap-2"
            >
              <span className="font-cinzel text-[9px] tracking-[0.35em] text-white/30 uppercase">Discover More</span>
              <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                <ChevronDown className="h-4 w-4 text-[#D4AF37]/50" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 2 â€” OUR STORY
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-[#D4AF37]/12">
          <AmbientOrbs />
          <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-start gap-14 lg:gap-20">

              {/* Left: Narrative */}
              <RevealSection className="lg:col-span-6 flex flex-col text-left">
                <SectionBadge text={aboutPageData.story.badge} align="left" />
                <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F7F4EE] leading-[1.1]">
                  {aboutPageData.story.title}
                </h2>
                <p className="mt-5 font-serif-luxury text-lg sm:text-xl italic text-[#F5D061] leading-relaxed">
                  {aboutPageData.story.lead}
                </p>
                <p className="mt-4 font-sans-clean text-sm sm:text-[15px] leading-relaxed text-[#CBC2B2]">
                  {aboutPageData.story.description}
                </p>

                {/* Milestone Tabs */}
                <div className="mt-10 pt-6 border-t border-white/10">
                  <span className="font-cinzel text-[10px] font-bold tracking-[0.28em] text-[#D4AF37]/70 uppercase block mb-4">
                    Historical Milestones
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {aboutPageData.story.milestones.map((ms, idx) => (
                      <motion.button
                        key={ms.year}
                        onClick={() => setActiveMilestoneIdx(idx)}
                        whileTap={{ scale: 0.97 }}
                        className={`relative overflow-hidden rounded-xl border p-3 text-center transition-all duration-300 ${
                          activeMilestoneIdx === idx
                            ? 'border-[#E5B842] bg-[#E5B842]/15 shadow-[0_0_20px_rgba(229,184,66,0.25)]'
                            : 'border-white/10 bg-black/40 hover:border-white/25 text-white/70'
                        }`}
                      >
                        {activeMilestoneIdx === idx && (
                          <motion.div
                            layoutId="milestoneActive"
                            className="absolute inset-0 bg-gradient-to-br from-[#E5B842]/10 via-transparent to-transparent rounded-xl pointer-events-none"
                          />
                        )}
                        <span className="font-cinzel text-sm sm:text-base font-bold text-[#F5D061] block">{ms.year}</span>
                        <span className="text-[10px] text-white/55 block mt-0.5 leading-tight">
                          {ms.title.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </RevealSection>

              {/* Right: Milestone Card */}
              <RevealSection delay={0.15} className="lg:col-span-6 relative flex items-start justify-center">
                <div className="relative w-full max-w-[580px]">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#E5B842]/25 via-transparent to-[#F5D061]/15 blur-xl pointer-events-none" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeMilestone.year}
                      initial={{ opacity: 0, scale: 0.96, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.96, y: -12 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-gold-card relative overflow-hidden rounded-3xl border border-[#D4AF37]/40 p-4 sm:p-5 shadow-2xl"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/8 bg-black">
                        <img
                          src={activeMilestone.image}
                          alt={activeMilestone.title}
                          className="h-full w-full object-cover brightness-90 transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute top-3 left-3 rounded-full bg-black/75 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-cinzel font-bold text-[#F5D061] border border-[#D4AF37]/55 tracking-widest">
                          {activeMilestone.year}
                        </div>
                        <div className="absolute top-3 right-3 rounded-full bg-[#E5B842]/15 border border-[#E5B842]/40 px-3 py-1 text-[9px] font-cinzel text-[#D4AF37] tracking-widest uppercase backdrop-blur-md">
                          Archive
                        </div>
                      </div>
                      <div className="mt-5 text-left">
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#FFF4D2]">{activeMilestone.title}</h3>
                        <p className="mt-2 text-sm text-[#CBC2B2] leading-relaxed">{activeMilestone.desc}</p>
                        <div className="mt-4 flex items-center gap-2">
                          {aboutPageData.story.milestones.map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{ width: i === activeMilestoneIdx ? 32 : 8 }}
                              className={`h-[2px] rounded-full transition-colors ${i === activeMilestoneIdx ? 'bg-[#E5B842]' : 'bg-white/20'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 3 â€” MISSION, VISION & VALUES
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-[#D4AF37]/12 bg-gradient-to-b from-[#070605] via-[#0B0907] to-[#070605]">
          <AmbientOrbs />
          <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">

            <RevealSection className="text-center max-w-2xl mx-auto mb-16">
              <SectionBadge text={aboutPageData.missionVision.badge} />
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal text-[#F7F4EE] leading-[1.1]">
                Our Mission, Vision & Values
              </h2>
              <p className="mt-4 font-sans-clean text-sm text-[#CBC2B2] leading-relaxed max-w-lg mx-auto">
                Three guiding principles that shape every note, every performance, and every connection we build.
              </p>
            </RevealSection>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
              {[
                { data: aboutPageData.missionVision.mission, Icon: Compass },
                { data: aboutPageData.missionVision.vision, Icon: Sparkles },
              ].map(({ data, Icon }, idx) => (
                <RevealSection key={idx} delay={idx * 0.12}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="glass-gold-card group relative overflow-hidden rounded-3xl p-8 text-left border-[#D4AF37]/30 shadow-2xl transition-all duration-300 hover:border-[#F5D061] h-full"
                  >
                    <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-[#E5B842]/8 to-transparent pointer-events-none" />
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5B842]/12 border border-[#E5B842]/50 text-[#F5D061] transition-all duration-300 group-hover:bg-[#E5B842]/20 group-hover:shadow-[0_0_20px_rgba(229,184,66,0.3)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFF4D2]">{data.title}</h3>
                    </div>
                    <p className="font-sans-clean text-sm sm:text-[15px] leading-relaxed text-[#D2C8B8]">{data.text}</p>
                    <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-2">
                      <div className="h-[1px] w-8 bg-[#D4AF37]/50" />
                      <span className="font-cinzel text-[9px] tracking-widest text-[#D4AF37]/60 uppercase">The Grand Symphony</span>
                    </div>
                  </motion.div>
                </RevealSection>
              ))}
            </div>

            {/* Core Values Grid */}
            <RevealSection delay={0.1}>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#FFF4D2]">Our Core Values</h3>
                  <span className="text-[11px] text-white/40 tracking-widest font-cinzel uppercase">5 Pillars</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {aboutPageData.missionVision.values.map((val, idx) => {
                    const isActive = activeValueId === val.id;
                    return (
                      <motion.div
                        key={val.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.08 }}
                        onClick={() => setActiveValueId(val.id)}
                        whileHover={{ y: -4 }}
                        className={`glass-gold-card group flex flex-col justify-between rounded-2xl p-5 text-left transition-all duration-300 cursor-pointer ${
                          isActive
                            ? 'border-[#E5B842] bg-[#16120D]/90 shadow-[0_0_30px_rgba(229,184,66,0.2)]'
                            : 'hover:border-white/25'
                        }`}
                      >
                        <div>
                          <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border bg-black/60 transition-all duration-300 ${
                            isActive ? 'border-[#E5B842] shadow-[0_0_15px_rgba(229,184,66,0.3)]' : 'border-[#D4AF37]/25'
                          }`}>
                            {getValueIcon(val.id)}
                          </div>
                          <h4 className="font-serif-luxury text-xl font-bold text-[#F7F4EE]">{val.title}</h4>
                          <p className="mt-2 text-xs text-[#CBC2B2] leading-relaxed">{val.desc}</p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-white/8 text-[10px] text-[#D4AF37]/80 font-medium leading-tight">
                          {val.detail}
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="valueIndicator"
                            className="mt-3 h-[2px] w-full rounded-full bg-gradient-to-r from-[#E5B842] to-transparent"
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 4 â€” ARTISTIC DIRECTOR
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-[#D4AF37]/12">
          <AmbientOrbs />
          <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-14 lg:gap-20">

              {/* Left: Portrait */}
              <RevealSection className="lg:col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[480px]">
                  <div className="absolute -inset-4 rounded-[50%] bg-[#E5B842]/12 blur-2xl pointer-events-none" />
                  <div className="absolute -inset-2 rounded-[40px_160px_40px_160px] bg-gradient-to-tr from-[#E5B842]/30 via-transparent to-[#F5D061]/20 blur-lg pointer-events-none" />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                    className="group relative aspect-[4/5] w-full overflow-hidden rounded-[35px_140px_35px_140px] border border-[#E5B842]/55 bg-black shadow-2xl"
                  >
                    <img
                      src={aboutPageData.director.image}
                      alt={aboutPageData.director.name}
                      className="h-full w-full object-cover object-top brightness-[0.92] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/15 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="font-cinzel text-[9px] font-bold text-[#E5B842] tracking-[0.3em] uppercase block mb-1">
                        {aboutPageData.director.role}
                      </span>
                      <h3 className="font-serif-luxury text-2xl font-bold text-white">{aboutPageData.director.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3 text-white/40" />
                        <span className="text-[10px] text-white/50 font-mono">{aboutPageData.director.tenure}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Credential Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute -top-4 -right-4 rounded-2xl glass-gold-card border-[#D4AF37]/50 p-3.5 shadow-xl backdrop-blur-md"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#E5B842]" />
                      <div>
                        <p className="font-cinzel text-[9px] font-bold text-[#F5D061] tracking-widest uppercase">Grammy</p>
                        <p className="text-[9px] text-white/55">Laureate 2019</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </RevealSection>

              {/* Right: Content */}
              <RevealSection delay={0.15} className="lg:col-span-7 flex flex-col text-left">
                <SectionBadge text={aboutPageData.director.badge} align="left" />
                <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.1] text-[#F7F4EE]">
                  <span>{aboutPageData.director.titleLine1} </span>
                  <span className="gold-text-gradient italic">{aboutPageData.director.titleLine2}</span>
                </h2>
                <p className="mt-6 font-sans-clean text-sm sm:text-[15px] leading-relaxed text-[#CBC2B2]">
                  {aboutPageData.director.bio}
                </p>

                {/* Quote Box */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="mt-7 relative overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#120F0B]/80 p-6 backdrop-blur-md"
                >
                  <Quote className="absolute top-4 right-4 h-8 w-8 text-[#E5B842]/15" />
                  <p className="font-serif-luxury text-base sm:text-lg italic text-[#F5D061] leading-relaxed">
                    "{aboutPageData.director.quote}"
                  </p>
                  <span className="font-cinzel text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase mt-3 block">
                    â€” {aboutPageData.director.name}
                  </span>
                </motion.div>

                {/* Mini Stats */}
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {[
                    { label: 'Seasons Led', value: '12' },
                    { label: 'World Tours', value: '8' },
                    { label: 'Recordings', value: '34+' },
                  ].map((item, i) => (
                    <div key={i} className="glass-gold-card rounded-xl p-3 text-center border-[#D4AF37]/20">
                      <span className="font-cinzel text-xl font-bold text-[#F5D061] block">{item.value}</span>
                      <span className="text-[10px] text-white/50 uppercase tracking-wider block mt-0.5">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => setIsVisionOpen(true)}
                    className="btn-gold-primary group flex items-center gap-2 rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#120E06]"
                  >
                    <span>Discover Our Artistic Vision</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </RevealSection>
            </div>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 5 â€” OUR PEOPLE
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative overflow-hidden py-24 md:py-32 border-b border-[#D4AF37]/12 bg-gradient-to-b from-[#070605] via-[#090806] to-[#070605]">
          <AmbientOrbs />
          <div className="relative z-10 mx-auto max-w-[1720px] px-6 md:px-12 lg:px-16">

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <RevealSection className="max-w-2xl text-left">
                <SectionBadge text={aboutPageData.people.badge} align="left" />
                <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-[#F7F4EE]">
                  {aboutPageData.people.title}
                </h2>
              </RevealSection>
              <RevealSection delay={0.1} className="max-w-md">
                <p className="font-sans-clean text-sm text-[#CBC2B2] leading-relaxed">{aboutPageData.people.intro}</p>
              </RevealSection>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutPageData.people.leaders.map((person, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.1 }}
                  onHoverStart={() => setHoveredPerson(idx)}
                  onHoverEnd={() => setHoveredPerson(null)}
                  whileHover={{ y: -8 }}
                  className="glass-gold-card group relative flex flex-col justify-between overflow-hidden rounded-2xl transition-all duration-500 hover:border-[#E5B842] shadow-xl cursor-pointer"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover brightness-90 transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <AnimatePresence>
                      {hoveredPerson === idx && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]"
                        >
                          <div className="rounded-full border border-[#E5B842] p-3 bg-black/50">
                            <Music2 className="h-5 w-5 text-[#E5B842]" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="font-cinzel text-[9px] font-bold tracking-[0.28em] text-[#D4AF37] uppercase block">
                        {person.role}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#FFF4D2] group-hover:text-white transition-colors">
                      {person.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#CBC2B2] line-clamp-2 leading-relaxed">{person.bio}</p>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/40">
                      <span className="font-cinzel tracking-wider uppercase">The Grand Symphony</span>
                      <motion.div animate={hoveredPerson === idx ? { x: 3 } : { x: 0 }} transition={{ duration: 0.2 }}>
                        <ChevronRight className="h-3.5 w-3.5 text-[#E5B842]" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <RevealSection delay={0.2} className="mt-12 text-center">
              <button
                onClick={() => setIsStoryOpen(true)}
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#F4EFE6] backdrop-blur-md transition-all hover:border-[#E5B842] hover:bg-[#E5B842]/10"
              >
                <span>Meet the Full Team</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#E5B842] transition-transform group-hover:translate-x-1" />
              </button>
            </RevealSection>
          </div>
        </section>

        {/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
            SECTION 6 â€” CINEMATIC CLOSING CTA
        â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */}
        <section className="relative overflow-hidden py-28 md:py-36 text-center border-b border-[#D4AF37]/15">
          <div className="absolute inset-0 z-0">
            <img
              src="/violinist-raw.jpg"
              alt="Symphony Performance"
              className="h-full w-full object-cover object-center brightness-[0.22]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#070605]/65 via-transparent to-[#070605]/85" />
            <div className="absolute inset-0 bg-[#070605]/38" />
          </div>
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#E5B842]/12 blur-[180px]" />

          <RevealSection className="relative z-10 mx-auto max-w-3xl px-6">
            <SectionBadge text={aboutPageData.cta.badge} />
            <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal text-[#F7F4EE] leading-[1.06]">
              {aboutPageData.cta.title}
            </h2>
            <p className="mt-6 font-sans-clean text-sm sm:text-base leading-relaxed text-[#CBC2B2] max-w-xl mx-auto">
              {aboutPageData.cta.description}
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsBookingOpen(true)}
                className="btn-gold-primary rounded-full px-9 py-4 text-xs sm:text-[13px] font-bold uppercase tracking-[0.22em] text-[#120E06]"
              >
                {aboutPageData.cta.primaryButton}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsContactOpen(true)}
                className="rounded-full border border-white/25 bg-black/45 px-9 py-4 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-[#F4EFE6] backdrop-blur-md hover:border-[#E5B842] hover:bg-[#E5B842]/10 transition-all"
              >
                {aboutPageData.cta.secondaryButton}
              </motion.button>
            </div>
          </RevealSection>
        </section>

        {/* Master Footer */}
        <Footer
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenStory={() => setIsStoryOpen(true)}
          onOpenSponsor={() => setIsSponsorOpen(true)}
        />
      </main>

      {/* Floating Audio Widget */}
      <AudioPlayerWidget />

      {/* Modals */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} initialEvent={upcomingEvents[0]} />
      <TrailerModal isOpen={isTrailerOpen} onClose={() => setIsTrailerOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <StoryModal isOpen={isStoryOpen} onClose={() => setIsStoryOpen(false)} />
      <SponsorshipModal isOpen={isSponsorOpen} onClose={() => setIsSponsorOpen(false)} initialImpact={null} />

      {/* Artistic Vision Modal */}
      <AnimatePresence>
        {isVisionOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/88 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="glass-gold-card relative w-full max-w-2xl rounded-3xl p-7 sm:p-9 text-[#F4EFE6] shadow-2xl border-[#D4AF37]/40"
            >
              <button
                onClick={() => setIsVisionOpen(false)}
                className="absolute top-5 right-5 rounded-full border border-white/20 p-2 text-white/60 hover:border-[#E5B842] hover:text-[#E5B842] transition-colors"
              >
                âœ•
              </button>
              <div className="flex items-center gap-2 text-[#E5B842] mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="font-cinzel text-[10px] font-bold tracking-[0.3em] uppercase">Artistic Manifesto</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#FFF4D2]">
                The Vision of Maestro Vance
              </h3>
              <p className="mt-5 font-serif-luxury text-base italic text-[#F5D061] leading-relaxed">
                "We seek not merely to replicate the notes inscribed on aged parchment, but to ignite the tempestuous human soul that originally breathed them into being."
              </p>
              <p className="mt-4 text-sm text-[#CBC2B2] leading-relaxed">
                Over the next five seasons, The Grand Symphony will commission twelve original symphonic poems from diverse global composers, inaugurate sensory-friendly concert halls across Europe and the Americas, and provide 1,000 completely free instrument endowments for gifted young students.
              </p>
              <div className="mt-7 flex items-center justify-between pt-5 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 text-[#E5B842]" />
                  <span className="text-[10px] font-mono text-white/40 tracking-wider">Season Vision 2024â€“2029</span>
                </div>
                <button
                  onClick={() => setIsVisionOpen(false)}
                  className="btn-gold-primary rounded-full px-7 py-2.5 text-xs font-bold uppercase tracking-widest"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
