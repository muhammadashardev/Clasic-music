import { useState, useEffect } from 'react';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ConcertsEvents from './pages/ConcertsEvents';
import ArtistsMusicians from './pages/ArtistsMusicians';
import MediaGallery from './pages/MediaGallery';

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (['about', 'events', 'artists', 'gallery'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#home' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  switch (currentPage) {
    case 'about':
      return <AboutUs onNavigateHome={() => navigateTo('home')} onNavigate={navigateTo} />;
    case 'events':
      return <ConcertsEvents onNavigate={navigateTo} />;
    case 'artists':
      return <ArtistsMusicians onNavigate={navigateTo} />;
    case 'gallery':
      return <MediaGallery onNavigate={navigateTo} />;
    case 'home':
    default:
      return <Home onNavigate={navigateTo} />;
  }
}

export default App;
