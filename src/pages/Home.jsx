import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MusicalLegacy from '../components/MusicalLegacy';
import UpcomingPerformances from '../components/UpcomingPerformances';
import FeaturedPerformance from '../components/FeaturedPerformance';
import SupportCommunity from '../components/SupportCommunity';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import BookingModal from '../components/BookingModal';
import TrailerModal from '../components/TrailerModal';
import StoryModal from '../components/StoryModal';
import GalleryModal from '../components/GalleryModal';
import SponsorshipModal from '../components/SponsorshipModal';
import AudioPlayerWidget from '../components/AudioPlayerWidget';
import { upcomingEvents } from '../data/mockData';

export default function Home({ onNavigate }) {
  const [currentHeroEventIndex, setCurrentHeroEventIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isTrailerOpen, setIsTrailerOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isSponsorOpen, setIsSponsorOpen] = useState(false);
  const [bookingEvent, setBookingEvent] = useState(upcomingEvents[0]);
  const [selectedImpact, setSelectedImpact] = useState(null);

  const handlePrevHeroEvent = () => {
    setCurrentHeroEventIndex((prev) =>
      prev === 0 ? upcomingEvents.length - 1 : prev - 1
    );
  };

  const handleNextHeroEvent = () => {
    setCurrentHeroEventIndex((prev) =>
      prev === upcomingEvents.length - 1 ? 0 : prev + 1
    );
  };

  const handleSelectHeroEvent = (idx) => {
    setCurrentHeroEventIndex(idx);
  };

  const handleOpenBooking = (evt) => {
    if (evt) {
      setBookingEvent({
        id: evt.id || 1,
        title: evt.title,
        date: evt.date,
        time: evt.time || '19:30 CET',
        location: evt.venue || evt.location,
        seatsLeft: 24,
      });
    } else {
      setBookingEvent(upcomingEvents[currentHeroEventIndex]);
    }
    setIsBookingOpen(true);
  };

  const handleOpenSponsorship = (impact) => {
    setSelectedImpact(impact);
    setIsSponsorOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#070605] text-[#F4EFE6] selection:bg-[#E5B842]/30 selection:text-white">
      {/* 1. Master Navigation Bar */}
      <Navbar
        currentPage="home"
        onNavigate={onNavigate}
        onOpenBooking={() => handleOpenBooking(upcomingEvents[currentHeroEventIndex])}
        onOpenStory={() => setIsStoryOpen(true)}
      />

      {/* Main Orchestral Experience */}
      <main>
        {/* Section 1: Hero Section */}
        <section id="hero-section">
          <Hero
            events={upcomingEvents}
            currentEventIndex={currentHeroEventIndex}
            onPrevEvent={handlePrevHeroEvent}
            onNextEvent={handleNextHeroEvent}
            onSelectEvent={handleSelectHeroEvent}
            onOpenBooking={() => handleOpenBooking(upcomingEvents[currentHeroEventIndex])}
            onOpenTrailer={() => setIsTrailerOpen(true)}
            onOpenStory={() => setIsStoryOpen(true)}
          />
        </section>

        {/* Section 2: Musical Legacy / About */}
        <section id="about-section">
          <MusicalLegacy
            onExploreMore={() => setIsStoryOpen(true)}
          />
        </section>

        {/* Section 3: Upcoming Performances / Concerts */}
        <section id="events-section">
          <UpcomingPerformances
            onSelectPerformance={(perf) => handleOpenBooking(perf)}
            onViewAll={() => handleOpenBooking(null)}
          />
        </section>

        {/* Section 4: Featured Performance / Artists */}
        <section id="artists-section">
          <FeaturedPerformance
            onWatchPerformances={() => setIsTrailerOpen(true)}
            onOpenGallery={() => setIsGalleryOpen(true)}
          />
        </section>

        {/* Section 5: Support & Community */}
        <section id="community-section">
          <SupportCommunity
            onSupportMission={handleOpenSponsorship}
            onWatchImpact={() => setIsTrailerOpen(true)}
          />
        </section>

        {/* Section 6: Newsletter / Contact */}
        <section id="contact-section">
          <Newsletter />
        </section>

        {/* Master Interactive Orchestral Footer */}
        <div id="footer-section">
          <Footer
            onNavigate={onNavigate}
            onOpenBooking={() => handleOpenBooking(null)}
            onOpenStory={() => setIsStoryOpen(true)}
            onOpenSponsor={() => handleOpenSponsorship(null)}
          />
        </div>
      </main>

      {/* Floating Symphony Live Audio Synthesizer Widget */}
      <AudioPlayerWidget />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialEvent={bookingEvent}
      />

      <TrailerModal
        isOpen={isTrailerOpen}
        onClose={() => setIsTrailerOpen(false)}
      />

      <StoryModal
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
      />

      <GalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
      />

      <SponsorshipModal
        isOpen={isSponsorOpen}
        onClose={() => setIsSponsorOpen(false)}
        initialImpact={selectedImpact}
      />
    </div>
  );
}
